import React from "react";

function OurStory() {
  const [imgPath, setImgPath] = React.useState();
  React.useEffect(() => {
    fetch('/api/img')
      .then(res => res.json())
      .then(data => setImgPath(data.img))
  },[])

  return (
    <div className="w-screen">
      <img
        className="w-full h-[40vh] md:h-auto object-cover mb-12"
        src={imgPath}
      />
      <div className="mx-auto text-center font-light max-w-3xl">
        <h1 className="text-4xl tracking-widest">Our Story</h1>
        <p className="tracking-wider text-sm my-12 px-8 md:px-0">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me and you can start
          adding your own content and make changes to the font. Feel free to
          drag and drop me anywhere you like on your page. I’m a great place for
          you to tell a story and let your users know a little more about you.
        </p>
        <p className="tracking-wider text-sm my-12 px-8 md:px-0">
          ​This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
