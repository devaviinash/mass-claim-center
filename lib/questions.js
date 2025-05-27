export const questions = {
   "depo-provera-lawsuits": [
      {
         question: "How many Depo-Provera injections did you receive?",
         type: "single",
         options: ["1–5", "5–10"],
      },
      {
         question:
            "Were you given brand-name Depo-Provera or generic medications?",
         type: "single",
         options: ["Generic medication", "Brand-name"],
      },
      {
         question:
            "Have you been diagnosed with brain tumors after taking Depo-Provera?",
         type: "single",
         options: ["Yes", "No"],
      },
      {
         question: "When were you diagnosed?",
         type: "single",
         options: [
            "Today",
            "This Week",
            "This Month",
            "More Than 30 Days Ago",
            "This Year",
            "More Than 2 Years Ago",
         ],
      },
      {
         question: "Briefly describe your experience with Depo-Provera",
         type: "text",
      },
      {
         type: "form",
         fields: [
            {
               name: "phone",
               label: "Phone Number",
               type: "tel",
               required: true,
            },
            {
               name: "firstName",
               label: "First Name",
               type: "text",
               required: false,
            },
            {
               name: "lastName",
               label: "Last Name",
               type: "text",
               required: false,
            },
            {
               name: "email",
               label: "Email Address",
               type: "email",
               required: true,
            },
            {
               name: "address",
               label: "Street Address",
               type: "text",
               required: false,
            },
            { name: "city", label: "City", type: "text", required: false },
            {
               name: "state",
               label: "State/Region",
               type: "text",
               required: false,
            },
            { name: "zip", label: "ZIP Code", type: "text", required: false },
         ],
         disclaimer:
            "By filling out the form, you are providing express consent by electronic signature that you may be contacted by telephone (via call and/or text messages) and/or email for marketing purposes by massclaimclaimcentre.com, its subsidiaries and affiliates or an independent lawyer using the phone number and/or email address you have provided to massclaimcentre.com, even if your phone number is listed on a Do Not Call Registry, including state and federal lists. You further agree that such contact may be made using an automatic telephone dialing system and/or prerecorded voice (message and data rates may apply). Your consent is not a condition of purchase. By continuing, you agree to the terms of the disclosures above.",
      },
   ],

   "roundup-weedkiller-lawsuits": [
      {
         question: "Have you been diagnosed with Non-Hodgkin's Lymphoma?",
         type: "single",
         options: ["Yes", "No"],
      },
      {
         question: "When were you diagnosed with Non-Hodgkin's Lymphoma?",
         type: "single",
         options: [
            "Within the last year",
            "1-3 years ago",
            "3-5 years ago",
            "More than 5 years ago",
         ],
      },
      {
         question: "How long were you exposed to Roundup?",
         type: "single",
         options: [
            "Less than 1 year",
            "1-5 years",
            "5-10 years",
            "More than 10 years",
         ],
      },
      {
         question: "What was your primary use of Roundup?",
         type: "single",
         options: [
            "Professional/Occupational Use",
            "Agricultural Use",
            "Personal/Home Garden Use",
            "Other",
         ],
      },
      {
         question:
            "Please describe your exposure to Roundup and any health impacts you've experienced",
         type: "text",
      },
      {
         type: "form",
         fields: [
            {
               name: "phone",
               label: "Phone Number",
               type: "tel",
               required: true,
            },
            {
               name: "firstName",
               label: "First Name",
               type: "text",
               required: false,
            },
            {
               name: "lastName",
               label: "Last Name",
               type: "text",
               required: false,
            },
            {
               name: "email",
               label: "Email Address",
               type: "email",
               required: true,
            },
            {
               name: "address",
               label: "Street Address",
               type: "text",
               required: false,
            },
            { name: "city", label: "City", type: "text", required: false },
            {
               name: "state",
               label: "State/Region",
               type: "text",
               required: false,
            },
            { name: "zip", label: "ZIP Code", type: "text", required: false },
         ],
         disclaimer:
            "By filling out the form, you are providing express consent by electronic signature that you may be contacted by telephone (via call and/or text messages) and/or email for marketing purposes by massclaimclaimcentre.com, its subsidiaries and affiliates or an independent lawyer using the phone number and/or email address you have provided to massclaimcentre.com, even if your phone number is listed on a Do Not Call Registry, including state and federal lists. You further agree that such contact may be made using an automatic telephone dialing system and/or prerecorded voice (message and data rates may apply). Your consent is not a condition of purchase. By continuing, you agree to the terms of the disclosures above.",
      },
   ],

   "talcum-powder-lawsuits": [
      {
         question:
            "Have you been diagnosed with ovarian cancer or mesothelioma?",
         type: "single",
         options: ["Ovarian Cancer", "Mesothelioma", "Both", "No"],
      },
      {
         question: "When were you diagnosed?",
         type: "single",
         options: [
            "Within the last year",
            "1-3 years ago",
            "3-5 years ago",
            "More than 5 years ago",
         ],
      },
      {
         question: "How long did you use talcum powder products?",
         type: "single",
         options: [
            "Less than 1 year",
            "1-5 years",
            "5-10 years",
            "More than 10 years",
         ],
      },
      {
         question: "Which talcum powder products did you use?",
         type: "single",
         options: [
            "Johnson's Baby Powder",
            "Shower to Shower",
            "Other talc products",
            "Multiple products",
         ],
      },
      {
         question:
            "Please describe your use of talcum powder products and any health impacts",
         type: "text",
      },
      {
         type: "form",
         fields: [
            {
               name: "phone",
               label: "Phone Number",
               type: "tel",
               required: true,
            },
            {
               name: "firstName",
               label: "First Name",
               type: "text",
               required: false,
            },
            {
               name: "lastName",
               label: "Last Name",
               type: "text",
               required: false,
            },
            {
               name: "email",
               label: "Email Address",
               type: "email",
               required: true,
            },
            {
               name: "address",
               label: "Street Address",
               type: "text",
               required: false,
            },
            { name: "city", label: "City", type: "text", required: false },
            {
               name: "state",
               label: "State/Region",
               type: "text",
               required: false,
            },
            { name: "zip", label: "ZIP Code", type: "text", required: false },
         ],
         disclaimer:
            "By filling out the form, you are providing express consent by electronic signature that you may be contacted by telephone (via call and/or text messages) and/or email for marketing purposes by massclaimclaimcentre.com, its subsidiaries and affiliates or an independent lawyer using the phone number and/or email address you have provided to massclaimcentre.com, even if your phone number is listed on a Do Not Call Registry, including state and federal lists. You further agree that such contact may be made using an automatic telephone dialing system and/or prerecorded voice (message and data rates may apply). Your consent is not a condition of purchase. By continuing, you agree to the terms of the disclosures above.",
      },
   ],

   "necrotizing-enterocolitis-nec-lawsuits": [
      {
         question: "Was your premature infant diagnosed with NEC?",
         type: "single",
         options: ["Yes", "No"],
      },
      {
         question: "What type of formula was your infant given?",
         type: "single",
         options: [
            "Similac",
            "Enfamil",
            "Other cow milk-based formula",
            "Not sure",
         ],
      },
      {
         question: "When was your infant diagnosed with NEC?",
         type: "single",
         options: [
            "Within the last 6 months",
            "6 months to 1 year ago",
            "1-2 years ago",
            "More than 2 years ago",
         ],
      },
      {
         question: "Was your infant hospitalized due to NEC?",
         type: "single",
         options: ["Yes", "No"],
      },
      {
         question:
            "Please describe your infant's experience with NEC and any complications",
         type: "text",
      },
      {
         type: "form",
         fields: [
            {
               name: "phone",
               label: "Phone Number",
               type: "tel",
               required: true,
            },
            {
               name: "firstName",
               label: "First Name",
               type: "text",
               required: false,
            },
            {
               name: "lastName",
               label: "Last Name",
               type: "text",
               required: false,
            },
            {
               name: "email",
               label: "Email Address",
               type: "email",
               required: true,
            },
            {
               name: "address",
               label: "Street Address",
               type: "text",
               required: false,
            },
            { name: "city", label: "City", type: "text", required: false },
            {
               name: "state",
               label: "State/Region",
               type: "text",
               required: false,
            },
            { name: "zip", label: "ZIP Code", type: "text", required: false },
         ],
         disclaimer:
            "By filling out the form, you are providing express consent by electronic signature that you may be contacted by telephone (via call and/or text messages) and/or email for marketing purposes by massclaimclaimcentre.com, its subsidiaries and affiliates or an independent lawyer using the phone number and/or email address you have provided to massclaimcentre.com, even if your phone number is listed on a Do Not Call Registry, including state and federal lists. You further agree that such contact may be made using an automatic telephone dialing system and/or prerecorded voice (message and data rates may apply). Your consent is not a condition of purchase. By continuing, you agree to the terms of the disclosures above.",
      },
   ],

   "lds-church-lawsuits": [
      {
         question: "What type of abuse or misconduct are you reporting?",
         type: "single",
         options: [
            "Sexual Abuse",
            "Financial Misconduct",
            "Institutional Cover-up",
            "Other Misconduct",
         ],
      },
      {
         question: "When did the abuse or misconduct occur?",
         type: "single",
         options: [
            "Within the last year",
            "1-5 years ago",
            "5-10 years ago",
            "More than 10 years ago",
         ],
      },
      {
         question: "Did you report the incident to church authorities?",
         type: "single",
         options: ["Yes", "No"],
      },
      {
         question: "Was any action taken after your report?",
         type: "single",
         options: [
            "Yes, appropriate action was taken",
            "Yes, but inadequate action",
            "No action was taken",
            "Never reported",
         ],
      },
      {
         question:
            "Please describe your experience and any impacts on your life",
         type: "text",
      },
      {
         type: "form",
         fields: [
            {
               name: "phone",
               label: "Phone Number",
               type: "tel",
               required: true,
            },
            {
               name: "firstName",
               label: "First Name",
               type: "text",
               required: false,
            },
            {
               name: "lastName",
               label: "Last Name",
               type: "text",
               required: false,
            },
            {
               name: "email",
               label: "Email Address",
               type: "email",
               required: true,
            },
            {
               name: "address",
               label: "Street Address",
               type: "text",
               required: false,
            },
            { name: "city", label: "City", type: "text", required: false },
            {
               name: "state",
               label: "State/Region",
               type: "text",
               required: false,
            },
            { name: "zip", label: "ZIP Code", type: "text", required: false },
         ],
         disclaimer:
            "By filling out the form, you are providing express consent by electronic signature that you may be contacted by telephone (via call and/or text messages) and/or email for marketing purposes by massclaimclaimcentre.com, its subsidiaries and affiliates or an independent lawyer using the phone number and/or email address you have provided to massclaimcentre.com, even if your phone number is listed on a Do Not Call Registry, including state and federal lists. You further agree that such contact may be made using an automatic telephone dialing system and/or prerecorded voice (message and data rates may apply). Your consent is not a condition of purchase. By continuing, you agree to the terms of the disclosures above.",
      },
   ],
};
