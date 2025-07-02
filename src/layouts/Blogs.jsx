import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Secrets of the Terracotta Army",
      excerpt:
        "How over 8,000 life-sized clay soldiers were crafted to guard China’s first emperor in the afterlife.",
      content: `In the spring of 1974, a group of farmers digging a well in Xi’an, China, made a discovery that would rewrite the world’s understanding of ancient Chinese civilization. Beneath the dusty soil lay the Terracotta Army — a vast underground military formation of over 8,000 life-sized clay soldiers, horses, and chariots, each crafted with astonishing detail and individuality.

Commissioned by Emperor Qin Shi Huang, the first emperor of a unified China, the Terracotta Army was intended to protect him in the afterlife. This belief stemmed from ancient Chinese spiritual traditions, which held that the afterlife mirrored the real world. The emperor, who had conquered and unified warring states into a single empire, sought to maintain his dominance even in death.

What makes the Terracotta Army so remarkable is not just its scale, but its craftsmanship. Each soldier has distinct facial features, hairstyles, and armor, suggesting that artisans modeled them after real individuals. The figures were originally painted in vibrant colors, though much of the pigment has faded over time. Weapons such as swords, spears, and crossbows were also buried with the army — many of them still sharp after more than 2,000 years.

The site is part of a much larger necropolis that includes the emperor’s tomb, which remains sealed. Ancient texts describe rivers of mercury and a ceiling embedded with pearls to represent the stars. Modern surveys have detected unusually high levels of mercury in the soil, lending credibility to these accounts — but concerns over preservation have delayed excavation.

The Terracotta Army is more than a funerary monument; it is a testament to the organizational power, artistic achievement, and spiritual beliefs of the Qin Dynasty. It continues to captivate historians, archaeologists, and visitors from around the world, offering a window into one of the most ambitious projects of the ancient world.`,
    },
    {
      title: "The Baghdad Battery: Ancient Electricity?",
      excerpt:
        "Could ancient civilizations have harnessed electricity? The Baghdad Battery sparks debate.",
      content: `In the 1930s, while excavating ruins near Baghdad, archaeologist Wilhelm König unearthed a curious artifact: a small clay jar containing a copper cylinder and an iron rod. Dated to around 250 BCE, this object would later be dubbed the “Baghdad Battery” — and it has since become one of the most hotly debated artifacts in archaeological history.

At first glance, the artifact appears unremarkable. But when examined closely, its components resemble those of a simple galvanic cell — a primitive battery. If filled with an acidic liquid like vinegar or lemon juice, the jar could theoretically produce a small electric charge. This led some researchers to speculate that ancient Mesopotamians may have discovered electricity over 1,800 years before Alessandro Volta’s invention of the modern battery.

Proponents of the battery theory suggest it may have been used for electroplating — a process of coating objects with a thin layer of metal. However, no electroplated artifacts from the same period have been conclusively linked to the device. Others argue it may have had a religious or ritualistic function, or that it was simply a storage vessel for sacred scrolls or papyri.

Skeptics point out that the evidence for electrical use is circumstantial at best. There are no written records or illustrations from the era that describe the use of electricity. Moreover, the materials and construction of the jar are inconsistent with known electrical applications.

Despite the controversy, the Baghdad Battery continues to fascinate both scientists and the public. It challenges our assumptions about the technological capabilities of ancient civilizations and reminds us that history is often more complex — and more mysterious — than we imagine. Whether it was a battery, a ritual object, or something else entirely, the artifact remains a symbol of the ingenuity and enigma of the ancient world.`,
    },
    {
      title: "Decoding the Rosetta Stone",
      excerpt:
        "The artifact that unlocked the secrets of Egyptian hieroglyphs and revolutionized archaeology.",
      content: `The Rosetta Stone is one of the most iconic and consequential artifacts ever discovered. Unearthed in 1799 by French soldiers during Napoleon’s campaign in Egypt, the stone was found near the town of Rosetta (modern-day Rashid) and quickly recognized for its potential to unlock the mysteries of ancient Egyptian writing.

The stone is a granodiorite slab inscribed with a decree issued in 196 BCE during the reign of King Ptolemy V. What makes it extraordinary is that the decree is written in three scripts: Greek, Demotic, and Egyptian hieroglyphs. At the time, scholars could read ancient Greek but had no understanding of hieroglyphs — a script that had been indecipherable for over a millennium.

The trilingual nature of the stone allowed scholars to compare the texts and begin the process of translation. The breakthrough came in the 1820s, when French linguist Jean-François Champollion identified that some hieroglyphs represented phonetic sounds rather than symbolic meanings. By matching names like “Ptolemy” and “Cleopatra” across the scripts, he was able to crack the code.

Champollion’s work laid the foundation for modern Egyptology. For the first time, scholars could read the inscriptions on temples, tombs, and monuments across Egypt. This opened a floodgate of knowledge about ancient Egyptian religion, governance, daily life, and cosmology.

Today, the Rosetta Stone is housed in the British Museum, where it draws millions of visitors each year. It is more than just a linguistic key — it is a symbol of intellectual perseverance and the power of cross-cultural understanding. Its discovery marked a turning point in the study of ancient history and remains a cornerstone of archaeological scholarship.`,
    },
    {
      title: "The Dead Sea Scrolls: Voices from the Desert",
      excerpt:
        "Discovered in the Judean Desert, these ancient manuscripts reshaped our understanding of early Judaism and the origins of the Bible.",
      content: `In 1947, a Bedouin shepherd searching for a lost goat stumbled upon a cave near Qumran, in the Judean Desert. Inside, he found clay jars containing ancient scrolls — a discovery that would become one of the most significant archaeological finds of the 20th century. These were the Dead Sea Scrolls: a collection of over 900 manuscripts written in Hebrew, Aramaic, and Greek, dating from the 3rd century BCE to the 1st century CE.

The scrolls include biblical texts, sectarian writings, and apocryphal works, many of which were previously unknown. Among them are the oldest known copies of books from the Hebrew Bible, including Psalms, Isaiah, and Deuteronomy. Their discovery provided scholars with a direct window into the religious beliefs, practices, and political tensions of Second Temple Judaism — the cultural and theological backdrop of early Christianity.

What makes the Dead Sea Scrolls so extraordinary is their preservation. The dry desert climate and sealed caves protected the fragile parchment and papyrus for over two millennia. The scrolls were likely written or collected by a Jewish sect known as the Essenes, who lived in isolation and practiced strict religious observance.

The scrolls have sparked intense scholarly debate. Some texts suggest apocalyptic expectations, messianic figures, and a dualistic worldview that contrasts sharply with mainstream Judaism of the time. Others offer insights into daily life, legal disputes, and community rules — revealing a complex and diverse religious landscape.

The process of deciphering, translating, and publishing the scrolls has taken decades. Controversies over access and interpretation have surrounded the project, but today, most of the scrolls are digitized and available to the public.

The Dead Sea Scrolls are more than ancient texts — they are voices from a vanished world. They illuminate the roots of Judaism and Christianity, challenge long-held assumptions, and remind us that history is often preserved in the most unexpected places. Their discovery in the barren cliffs of Qumran continues to echo across time, reshaping our understanding of faith, identity, and the written word.`,
    },
  ];

  return (
    <div className="py-20 md:max-w-10/12 mx-auto">
      <hr className="max-w-15 mx-auto text-yellow-600 border-2 rounded-2xl" />
      <h2 className="text-4xl font-bold text-center my-8">From the Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {blogPosts.map((post, idx) => (
          <BlogCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
