"use server";

import {sendEmail} from '@/lib/brevo'
import {redirect} from 'next/navigation'

export async function handleForm(formData: FormData) {
  const title = formData.get("title");
  const to_name = formData.get("to_name");
  const to_email = formData.get("to_email");
  const content = formData.get("content");

  if (!title || !to_name || !to_email || !content) {
    return console.log("Please fill all fields");
  }

  await sendEmail({
    subject: title as string,
    to: [{
      name: to_name as string,
      email: to_email as string
    }],
    htmlContent: content as string
  })

  redirect('/success')  

}
