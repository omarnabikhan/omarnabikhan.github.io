import Image from "next/image"

export default function Home() {
  return (
    <div>
      <title>Omar&lsquos website</title>
      <h1>Omar&lsquo;s website.</h1>
      <h1>Here&lsquo;s a picture of my cat</h1>
      <Image alt="mano" src="mano.jpg" height = {300} width={300} />
    </div> 
  );
}
