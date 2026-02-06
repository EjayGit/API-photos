export default function handler(req, res) {
  const photos = [
    { id: 1, title: "Flowers in grey", src: "...", alt: "..." },
    { id: 2, title: "Bare trees in grey", src: "...", alt: "..." },
    // etc...
  ];

  res.status(200).json(photos);
}

