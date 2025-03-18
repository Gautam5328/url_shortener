import supabase from "./supabase";


export async function storeContactDetails(contactDetails) {
    const {data, error} =  await supabase.from("contactus").insert({
      name: contactDetails.fullName,
      email: contactDetails.email,
      subject: contactDetails.subject,
      message: contactDetails.message,
    });
      
    if (error) {
      console.error("Error fetching clicks:", error);
      return null;
    }
  
    return data;
  }