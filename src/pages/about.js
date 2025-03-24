import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1>À propos de moi</h1>
      <Image src="/profile.jpg" width={150} height={150} alt="Ma photo de profil" />
      <p>Je suis un développeur passionné par le web et la technologie.</p>
    </div>
  );
}
