import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { folder } = req.query; // Get the folder from the query parameter
  const publicPath = path.join(process.cwd(), 'public');

  if (!folder) {
    return res.status(400).json({ error: 'Folder query parameter is required.' });
  }

  const folderPath = path.join(publicPath, folder);

  // Check if the folder exists
  if (!fs.existsSync(folderPath)) {
    return res.status(404).json({ error: `Folder "${folder}" not found.` });
  }

  const supportedExtensions = /\.(png|jpe?g|gif|webp|bmp|tiff|svg)$/i;

  // Sort files by filename
  const images = fs
    .readdirSync(folderPath)
    .filter((file) => supportedExtensions.test(file)) // Only include image files
    .sort() // Sort files alphabetically
    .map((file) => `/${folder}/${file}`); // Return the public URL for each file

  res.status(200).json(images);
}
