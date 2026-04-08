import { useState, type FormEvent } from "react";
import { PillButton } from "./PillButton";
import type { AssetVariant } from "../data/siteData";

interface CommentFormProps {
  buttonVariant?: AssetVariant;
}

export function CommentForm({ buttonVariant = "png" }: CommentFormProps) {
  void buttonVariant;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <div className="comment">
      <h2>Leave a comment</h2>

      <form className="enquiry-form" action="#" method="post" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows={4} placeholder="Your Comment..." required />

        <PillButton type="submit" className="submit-btn" variant="solid">
          Submit
        </PillButton>
      </form>

      {submitted ? (
        <p style={{ marginTop: "16px" }}>Thanks for sharing your thoughts.</p>
      ) : null}
    </div>
  );
}
