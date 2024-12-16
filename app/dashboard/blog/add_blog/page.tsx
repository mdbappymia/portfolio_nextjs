"use client";
import { FileInput, Label, Select, Tabs, TextInput } from "flowbite-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { BiCheck, BiPlus } from "react-icons/bi";
import catagories from "@/public/data/blog_catagory.json";

// Dynamically import Quill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// import "react-quill/dist/quill.snow.css"; // Import the default theme CSS
import "react-quill/dist/quill.snow.css"; // Import the default theme CSS

const QuillEditor = () => {
  const [editorContent, setEditorContent] = useState<string>("");

  const handleEditorChange = (value: string) => {
    setEditorContent(value);
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Add Blog Title" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>
      <div className="mb-2">
        <div className="mb-2">
          <Label htmlFor="default-file-upload" value="Add cover picture" />
        </div>
        <FileInput id="default-file-upload" />
      </div>
      <div className="mb-2">
        <div className="mb-2">
          <Label htmlFor="category" value="Add or select category" />
        </div>
        <Tabs aria-label="Tabs with icons">
          <Tabs.Item active title="Select existing category" icon={BiCheck}>
            <Select id="countries" required className="w-72">
              {catagories.map((a, i) => (
                <option key={i}>{a}</option>
              ))}
            </Select>
          </Tabs.Item>
          <Tabs.Item title="Add new category" icon={BiPlus}>
            <TextInput
              id="category_input"
              type="text"
              sizing="md"
              className="w-72"
              placeholder="Insert category name"
            />
          </Tabs.Item>
        </Tabs>
      </div>

      <ReactQuill
        className="w-full"
        value={editorContent}
        onChange={handleEditorChange}
        modules={{
          toolbar: [
            // [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ header: [] }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            [{ align: [] }],
            ["link"],
            ["blockquote", "code-block"],
            // ["link", "image"],
          ],
        }}
      />
      <div>
        <h3>Editor Content:</h3>
        {/* <pre>
          {editorContent
            .replaceAll("<h1", "<h1 class='text-2xl'")
            .replaceAll("<h2", "<h2 class='text-xl'")
            .replaceAll("<h3", "<h3 class='text-md'")}
        </pre> */}
        <div>
          {ReactHtmlParser(
            editorContent
              .replaceAll("<h1", "<h1 class='text-2xl'")
              .replaceAll("<h2", "<h2 class='text-xl'")
              .replaceAll("<h3", "<h3 class='text-md'")
          )}
        </div>
      </div>
    </div>
  );
};

export default QuillEditor;
