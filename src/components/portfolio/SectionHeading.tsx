import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ eyebrow, title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-2xl mx-auto text-center mb-12"
    >
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
};
