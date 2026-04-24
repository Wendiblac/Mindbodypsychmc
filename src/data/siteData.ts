export type AssetVariant = "svg" | "png";

export const assetPath = (filename: string) => `/assets/${filename}`;

export const externalLinks = {
  booking:
    "https://drchrono.com/scheduling/offices/dGhpcyBpcyAxNiBjaGFyczLdYNT6Af9Axf-6AiMdoGg=",
  psychologyToday: "https://www.psychologytoday.com/profile/1490314",
  facebook: "https://www.facebook.com/mindbodypsychmc",
  instagram: "https://www.instagram.com/mindbodypsychmc",
  linkedin: "https://www.linkedin.com/company/mindbodypsychmc",
} as const;

export const footerLinks = [
  { href: "index.html", label: "Home" },
  { href: "services.html", label: "Services" },
  { href: "about.html", label: "About" },
  { href: "contact.html", label: "Contact" },
  { href: "resources.html", label: "Resources" },
  { href: "insurances.html", label: "Insurance" },
  { href: "blog.html", label: "Blog" },
];

export const mobileMenuLinks = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "contact.html", label: "Contact" },
  { href: "services.html", label: "Services" },
  { href: "resources.html", label: "Resources" },
  { href: "insurances.html", label: "Insurance" },
  { href: "blog.html", label: "Blog" },
];

export const homeServiceCards = [
  {
    image: "mhd.png",
    alt: "Mental Health Diagnosis and Treatment",
    label: "Mental Health Diagnosis & Treatment",
  },
  {
    image: "mm.png",
    alt: "Medication Management",
    label: "Medication Management",
  },
  {
    image: "adhd.png",
    alt: "ADHD and Mood Disorders Support",
    label: "ADHD & Mood Disorders Support",
  },
  {
    image: "cdm.png",
    alt: "Chronic Disease Management",
    label: "Chronic Disease Management",
  },
  {
    image: "std.png",
    alt: "STD Testing and Acute Care",
    label: "STD Testing & Acute Care",
  },
];

export const servicesCards = [
  {
    image: "mhd.png",
    alt: "Psychiatric diagnosis",
    title: "Comprehensive Psychiatric Diagnosis & Treatment",
    body: "We evaluate and manage mental health conditions including anxiety, depression, mood disorders, ADHD, eating disorders, and psychosis. Our evaluations consider medical comorbidities for a holistic approach.",
  },
  {
    image: "mm.png",
    alt: "Medication Management",
    title: "Medication Management",
    body: "We provide personalized medication plans that align with each patient's psychiatric symptoms and physical health conditions, ensuring safe and effective treatment.",
  },
  {
    image: "adhd.png",
    alt: "Psychotherapy",
    title: "Psychotherapy & Counseling",
    body: "Our therapy services include CBT, mindfulness-based therapy, and other evidence-based approaches tailored to individual needs to support emotional resilience and behavioral change.",
  },
  {
    image: "rsa.png",
    alt: "Risk assessment",
    title: "Risk Assessment & Safety Planning",
    body: "We assess and manage risks related to suicidal ideation and self-harm with compassionate care plans and ongoing safety strategies to ensure patient well-being.",
  },
  {
    image: "mbh.png",
    alt: "Mind-body health integration",
    title: "Mind-Body Health Integration",
    body: "We examine how physical health influences mental health, offering integrated strategies to support overall wellness and effective symptom management.",
  },
  {
    image: "cdm.png",
    alt: "Chronic conditions",
    title: "Chronic Condition Management",
    body: "Our team helps manage chronic conditions such as diabetes, hypertension, and high cholesterol that can impact mental health, aiming for improved quality of life.",
  },
  {
    image: "std.png",
    alt: "Routine health maintenance",
    title: "Routine Health Maintenance",
    body: "We provide essential medical screenings like STD testing, blood work, and vital sign monitoring to support preventive health alongside psychiatric care.",
  },
  {
    image: "mc.png",
    alt: "Medical coordination",
    title: "Medical Coordination",
    body: "We collaborate with primary care and specialists to ensure integrated treatment plans that align medical and psychiatric needs.",
  },
  {
    image: "pmm.png",
    alt: "Medication side effect monitoring",
    title: "Psychiatric Medication Side Effects Management",
    body: "We monitor and address physical side effects of psychiatric medications, offering adjustments and treatments to enhance comfort and effectiveness.",
  },
  {
    image: "wl.png",
    alt: "Weight loss program",
    title: "Weight Loss & Metabolic Wellness",
    body: "Our holistic weight loss programs are tailored for mental and physical health alignment. We combine weight management medications, lifestyle coaching, medical supervision, and nutrition counseling to support sustainable results.",
  },
];

export const testimonials = [
  {
    title: '"Finally, a place that truly listens."',
    body: '"After years of feeling misunderstood, I found Mind & Body. Abigail Asumadu-Mensah took the time to really understand my concerns. Her personalized approach helped me feel seen, heard, and cared for."',
    name: "Daniel Lewis",
    location: "Virginia",
  },
  {
    title: '"Available within minutes!!!"',
    body: '"Articulate and thorough with my concerns. Very kind and understanding. Who can ask for more. Thank you!!"',
    name: "Debbie R",
    location: "Virginia",
  },
  {
    title: '"Professional, compassionate, and effective care."',
    body: '"I absolutely would recommend this doctor to anybody! She was very helpful and she actually cared about my well being."',
    name: "Erin C.",
    location: "Washington D.C",
  },
  {
    title: '"Getting help was easy and stress-free."',
    body: '"Very knowledgeable and helpful! Explained things thoroughly and was able to book a same day appointment."',
    name: "Emily Evans",
    location: "West Virginia",
  },
];

export const insuranceLogos = [
  ["allied.png", "Allied"],
  ["cigna.png", "Cigna"],
  ["carelon.jpg", "Carelon"],
  ["quest.png", "Quest"],
  ["evernorth.png", "Evernorth"],
  ["meritain.jpeg", "Meritain"],
  ["Coventry.png", "Coventry"],
  ["nippon.png", "Nippon"],
  ["geha.jpg", "GEHA"],
  ["seiu.jpg", "1199SEIU Funds"],
  ["degree.jpg", "90 Degree Benefits"],
  ["caprock.jpg", "Caprock"],
  ["boon.jpg", "Boon-Chapman"],
  ["aetna.png", "Aetna"],
  ["anthem.png", "Anthem"],
  ["bluecross.png", "Blue Cross"],
  ["carefirst.png", "CareFirst"],
  ["WebTPA.webp", "WebTPA"],
  ["allsavers.png", "Allsavers"],
  ["avmed.png", "AvMed"],
  ["goldenrule.webp", "Golden Rule"],
  ["havard.png", "Harvard Pilgrim"],
  ["optum.webp", "Optum"],
  ["optum.png", "Optum Health"],
  ["oscar.webp", "Oscar"],
  ["oxford.png", "Oxford"],
  ["Surest.webp", "Surest"],
  ["unitedhealth.png", "United Healthcare"],
  ["Tufts.jpg", "Tufts"],
  ["united.png", "United"],
  ["unitedshared.png", "United Shared Services"],
  ["unitedstudent.webp", "United Student Resources"],
] as const;

export type ArticleSlug =
  | "anxiety-disorders"
  | "weight-loss-mental-health"
  | "diagnosing-mood-disorders"
  | "post-covid-recovery";

export interface ArticleData {
  slug: ArticleSlug;
  href: `${ArticleSlug}.html`;
  title: string;
  image: string;
  excerpt: string;
  leadParagraphs: string[];
  bodyParagraphs: string[];
}

export const articles: ArticleData[] = [
  {
    slug: "anxiety-disorders",
    href: "anxiety-disorders.html",
    title: "Understanding Anxiety Disorders",
    image: "anxiety.jpg",
    excerpt:
      "Anxiety is a normal response to stress or danger, but when it becomes overwhelming, persistent, and interferes with daily functioning, it may be more than everyday worry.",
    leadParagraphs: [
      "Anxiety disorders are among the most prevalent mental health conditions, affecting millions of individuals worldwide. While occasional anxiety is a natural response to stress, persistent and overwhelming worry can interfere with daily life, relationships, and overall well-being. Anxiety is a fundamental survival mechanism, but when it becomes excessive, it can disrupt normal functioning.",
      "There are several types of anxiety disorders, including generalized anxiety disorder (GAD), which is characterized by chronic worry about everyday matters; panic disorder, which involves sudden, intense fear accompanied by physical symptoms like heart palpitations and shortness of breath; and social anxiety disorder, which manifests as an overwhelming fear of social interactions, often leading to avoidance behaviors.",
    ],
    bodyParagraphs: [
      "Specific phobias involve intense fear of certain objects or situations, such as flying or confined spaces, while obsessive-compulsive disorder (OCD) is marked by repetitive thoughts and compulsive behaviors driven by anxiety.",
      "Symptoms of anxiety disorders vary by individual but often include excessive worry, restlessness, difficulty concentrating, fatigue, irritability, and physical manifestations such as nausea or muscle tension. The causes can be complex, ranging from genetic predispositions and neurochemical imbalances to traumatic life experiences and chronic stress.",
      "Diagnosis usually involves clinical assessments conducted by mental health professionals, utilizing psychological questionnaires and personal evaluations. Treatment options include cognitive-behavioral therapy (CBT), medication such as selective serotonin reuptake inhibitors (SSRIs) or beta-blockers, and lifestyle adjustments that incorporate regular exercise, mindfulness, healthy sleep habits, and relaxation techniques. Recovery from anxiety disorders is often a process that requires patience and consistent management strategies.",
    ],
  },
  {
    slug: "weight-loss-mental-health",
    href: "weight-loss-mental-health.html",
    title: "Weight Loss & Mental Health: The Connection",
    image: "weight.png",
    excerpt:
      "Weight loss and mental health are deeply intertwined, yet often treated as separate issues. Understanding this connection is crucial for a balanced and sustainable approach to health.",
    leadParagraphs: [
      "Weight management is not just a physical journey; it is intricately connected to mental health. Emotional well-being plays a crucial role in sustaining healthy weight loss, influencing eating habits, motivation levels, and exercise routines. On the other hand, diet and physical activity have a profound impact on mood regulation, cognitive function, and overall mental health.",
      "One of the most common psychological factors affecting weight management is emotional eating, where stress, anxiety, or depression trigger cravings for high-calorie, processed foods. Individuals may use food as a coping mechanism, leading to unhealthy eating patterns. Additionally, body image concerns can shape self-esteem, making it difficult to sustain positive weight management habits.",
    ],
    bodyParagraphs: [
      "Feelings of failure or discouragement often deter people from maintaining healthy routines. The lack of motivation caused by conditions such as depression can also affect physical activity levels, making it harder to maintain consistent exercise habits.",
      "Weight loss can positively impact mental health by improving mood and energy levels. Regular physical activity stimulates the release of endorphins, which enhance feelings of well-being and reduce stress. A nutritious diet can also regulate sleep cycles and boost cognitive function.",
      "Sustainable strategies for achieving a healthy balance include mindful eating, stress management techniques like meditation and journaling, and holistic approaches to exercise that incorporate enjoyable activities such as yoga or dancing. Seeking guidance from a psychologist or nutritionist can also provide a structured plan tailored to individual needs.",
    ],
  },
  {
    slug: "diagnosing-mood-disorders",
    href: "diagnosing-mood-disorders.html",
    title: "Diagnosing Mood Disorders: What to Know",
    image: "mood.jpg",
    excerpt:
      "Mood disorders affect how we feel, think, and function daily. Proper diagnosis is the first step toward effective treatment and long-term recovery.",
    leadParagraphs: [
      "Mood disorders affect emotional regulation, causing fluctuations in mood that can disrupt daily life and overall well-being. Early diagnosis and intervention play a critical role in managing symptoms effectively. Mood disorders can range from major depressive disorder (MDD) to bipolar disorder, where individuals experience extreme highs followed by deep depressive episodes.",
      "Other variations include persistent depressive disorder, a chronic form of depression lasting for two years or more, and cyclothymic disorder, a milder form of bipolar disorder with frequent mood swings. Recognizing the symptoms of mood disorders is essential for early intervention.",
    ],
    bodyParagraphs: [
      "Many individuals experience chronic sadness, feelings of emptiness, changes in appetite, sleep disturbances, withdrawal from social activities, difficulty concentrating, and in severe cases, suicidal thoughts. Emotional instability can significantly impact daily functioning, making professional evaluation crucial.",
      "Diagnosing mood disorders involves comprehensive psychological assessments conducted by mental health professionals. These assessments may include standardized questionnaires, discussions about personal and family history, and medical tests to rule out underlying conditions.",
      "Once diagnosed, treatment options can vary based on severity and individual needs. Cognitive-behavioral therapy (CBT) and dialectical behavior therapy (DBT) are effective approaches that help individuals reframe negative thought patterns and develop coping strategies, while medications and healthy routines can support long-term emotional well-being.",
    ],
  },
  {
    slug: "post-covid-recovery",
    href: "post-covid-recovery.html",
    title: "Post-COVID Mental Health Recovery",
    image: "covid.webp",
    excerpt:
      "The pandemic's impact on mental health has been profound. Recovery now requires intentional strategies for rebuilding emotional resilience and adapting to new realities.",
    leadParagraphs: [
      "The COVID-19 pandemic has left lasting effects on global mental health, with increased cases of anxiety, depression, and trauma-related disorders reported in various communities. The disruptions caused by prolonged isolation, health concerns, and significant life changes have led many individuals to struggle with emotional instability and stress.",
      "One of the most common challenges experienced in post-pandemic recovery is health anxiety, where individuals develop persistent fears about illness, infections, or contamination. Many people also find it difficult to readjust socially after extended periods of isolation, and work-life balance concerns have contributed to high levels of burnout.",
    ],
    bodyParagraphs: [
      "Mental health recovery in the post-pandemic era requires intentional strategies for rebuilding emotional resilience and adapting to new realities.",
      "Overcoming these challenges involves adopting structured approaches to emotional healing. Gradual reintegration into social settings can help individuals ease back into interactions without overwhelming stress, and seeking mental health counseling provides additional support in coping with post-pandemic anxiety and uncertainty.",
      "Long-term resilience depends on maintaining a strong support system, engaging in social networks, and adopting healthy routines that reinforce mental well-being. Recovery is unique to each individual, but with patience and proactive self-care, emotional healing becomes achievable.",
    ],
  },
];
