import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="bg-base-200 py-14 px-4">
      <div className="md:max-w-10/12 mx-auto text-center">
        <h1 className="text-5xl font-bold mb-14">About Us</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed text-base-content">
            At{" "}
            <span className="font-semibold">Historical Artifacts Tracker</span>,
            we are more than just a digital archive — we are a passionate
            community of historians, researchers, and curious minds dedicated to
            preserving the legacy of human civilization. Our platform is a
            living museum, where every artifact tells a story and every user
            becomes a storyteller. Whether you're a scholar, a student, or
            simply someone who marvels at the past, you’ll find a home here.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-base-content">
            Our mission is to bridge the gap between the ancient and the modern
            by creating an interactive, user-friendly space where history comes
            alive. We believe that artifacts are more than objects — they are
            echoes of human ingenuity, resilience, and culture. Through our
            platform, users can discover rare relics, track their historical
            significance, and contribute their own findings to a growing global
            archive. We aim to democratize access to history and make it
            engaging, accessible, and collaborative.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Join Us in Preserving History
          </h2>
          <p className="text-lg leading-relaxed text-base-content">
            Whether you're a seasoned archaeologist or a weekend history
            enthusiast, your voice matters. Join our vibrant community in
            exploring and preserving history. Your discoveries help keep our
            shared heritage alive! From uploading new artifacts to engaging in
            discussions about ancient civilizations, every contribution adds a
            new thread to the rich tapestry of our collective past.
          </p>
        </section>

        <div className="mt-10">
          <p className="text-xl font-medium text-base-content">
            Be part of the journey as we uncover the stories behind the
            artifacts that shaped our world.
          </p>
          <button className="btn btn-primary mt-6 text-lg">
            <Link to="/allArtifacts">Start Exploring</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
