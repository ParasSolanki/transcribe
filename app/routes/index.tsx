import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import DOMPurify from "dompurify";
import { Loader2Icon, SendIcon } from "lucide-react";
import { marked } from "marked";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

const formSchema = z.object({
  url: z.string().url(),
});

function IndexPage() {
  return (
    <main className="bg-background relative flex min-h-svh flex-col justify-center">
      <section className="mx-auto w-full max-w-4xl px-4 py-20">
        <Transcribe />
      </section>
    </main>
  );
}

function Transcribe() {
  const [transcript, setTranscript] = React.useState("");
  const [html, setHtml] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function parseTranscript() {
      console.log(transcript);
      const md = await marked.parse(transcript);

      if (!md) return;

      setHtml(DOMPurify.sanitize(md));
    }

    if (transcript) parseTranscript();
  }, [transcript]);

  const onSubmit = React.useCallback(
    async (values: z.infer<typeof formSchema>) => {
      try {
        setTranscript("");
        setHtml("");
        setLoading(true);
        const response = await fetch("/api/transcribe", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader?.read();

          if (done) {
            setLoading(false);
            break;
          }
          const text = decoder.decode(value, { stream: true });

          setTranscript((prev) => prev + text);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return (
    <>
      <VideoForm onSubmit={onSubmit} loading={loading} />
      {loading && (
        <div className="my-4 flex items-center">
          <Loader2Icon className="mr-2 size-4 animate-spin" aria-hidden />

          <span className="text-muted-foreground text-sm">
            Generating transcript...
          </span>
        </div>
      )}
      {html && (
        <div
          ref={(node) => {
            if (node) {
              node.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }}
          className="prose-invert prose mt-4 w-full max-w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      )}
    </>
  );
}

const VideoForm = React.memo(function VideoForm({
  onSubmit,
  loading,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  loading: boolean;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  return (
    <div className="w-full space-y-8">
      <h1 className="text-center text-4xl font-bold text-pretty">
        Transcribe Youtube Video
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          aria-disabled={loading}
          className="w-full"
        >
          <fieldset
            disabled={loading}
            aria-disabled={loading}
            className="w-full"
          >
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Enter youtube video url" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size="icon"
                type="submit"
                disabled={loading}
                aria-disabled={loading}
              >
                <SendIcon className="size-5" />
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
});
