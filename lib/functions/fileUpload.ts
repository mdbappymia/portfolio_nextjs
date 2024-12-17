import fs from "fs";
import { writeFile } from "fs/promises";
import path from "path";

/**
 * Handles file upload and saves the file to the specified directory.
 *
 * @param file - File object containing size, type, name, and lastModified.
 * @param dirPath - The directory path to save the uploaded file.
 * @returns The full path to the uploaded file.
 */
const fileUpload = async (file: any, dirPath: string): Promise<string> => {
  const dateTime = Date.now(); // Generate a unique timestamp
  const fileName = `${dateTime}_${file.name}`; // Create a unique file name
  const filePath = path.join(dirPath, fileName); // Target file path
  const bytes = await file.arrayBuffer();
  try {
    // Ensure the directory exists
    await fs.promises.mkdir(dirPath, { recursive: true });

    // Use `file.filepath` provided by `formidable` to move the file to the target location
    // await fs.promises.rename(file.filepath, filePath);
    const buffer: any = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    return filePath; // Return the uploaded file path
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("File upload failed");
  }
};

export default fileUpload;
