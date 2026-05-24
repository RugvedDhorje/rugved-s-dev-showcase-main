import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { sendContactMessage } from "@/lib/contact";
import { SectionHeading } from "./SectionHeading";
import { contactLinks } from "@/data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "A bit more detail, please"),
});
type FormValues = z.infer<typeof schema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await sendContactMessage({
        name: values.name,
        email: values.email,
        message: values.message,
      });
      toast({
        title: "Message sent",
        description: `Thanks ${values.name}! I'll reply to ${values.email} soon.`,
      });
      form.reset();
    } catch {
      toast({
        title: "Could not send message",
        description: `Please try again or email me at ${contactLinks.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great."
          description="Open to frontend roles, freelance projects, and product collaborations."
        />

        <div className="grid gap-6 lg:grid-cols-5 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass rounded-2xl p-6 lg:col-span-2 flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="text-sm text-muted-foreground">
              Prefer email or socials? Reach out directly.
            </p>

            <div className="mt-2 flex flex-col gap-3">
              <a
                href={`mailto:${contactLinks.email}`}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {contactLinks.email}
              </a>
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="glass rounded-2xl p-6 lg:col-span-3"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="Tell me a bit about your project…" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-elegant"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
