"use client";
import {
  Button,
  FileInput,
  Label,
  Select,
  Tabs,
  TextInput,
} from "flowbite-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { BiCheck, BiPlus } from "react-icons/bi";
import catagories from "@/public/data/blog_catagory.json";

// Dynamically import Quill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// import "react-quill/dist/quill.snow.css"; // Import the default theme CSS
import "react-quill/dist/quill.snow.css"; // Import the default theme CSS
import PreviewBlogModal from "@/components/Dashboard/Blog/PreviewBlogModal";
import { useAppSelector } from "@/redux/store";

const QuillEditor = () => {
  const [editorContent, setEditorContent] = useState<string>("");
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [blogCategory, setBlogCategory] = useState<string>("All");
  const [blogCover, setBlogCover] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  const user: any = useAppSelector((state) => state.user);

  // console.log(user);

  const handleEditorChange = (value: string) => {
    setEditorContent(value);
  };
  // console.log(process.env.NEXT_PUBLIC_ROOT_URL);
  const handleSubmit = () => {
    const confirm = window.confirm("Are you sure?");
    console.log(confirm);
    if (confirm) {
      const formData = new FormData();
      if (blogCover && blogTitle) {
        formData.append("blogTitle", blogTitle);
        formData.append("blogCategory", blogCategory);
        formData.append("blogCover", blogCover[0]);
        formData.append("content", editorContent);
        formData.append("author", user.id);

        console.log(formData);
        fetch("/api/blog/create", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data: any) => {
            console.log(data);
          });
      }
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Add Blog Title" />
        </div>
        <TextInput
          id="base"
          type="text"
          sizing="md"
          onChange={(e) => setBlogTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <div className="mb-2">
          <Label htmlFor="default-file-upload" value="Add cover picture" />
        </div>
        <FileInput
          id="default-file-upload"
          onChange={(e) => setBlogCover(e.target.files)}
          accept="image/png, image/jpeg"
          helperText="PNG, JPG (MAX. 200kb)."
        />
      </div>
      <div className="mb-2">
        <div className="mb-2">
          <Label htmlFor="category" value="Add or select category" />
        </div>
        <Tabs aria-label="Tabs with icons">
          <Tabs.Item active title="Select existing category" icon={BiCheck}>
            <Select
              id="countries"
              required
              className="max-w-72"
              onChange={(e) => setBlogCategory(e.target.value)}
            >
              <option selected value="All">
                Default
              </option>
              {catagories.map((a, i) => (
                <option key={i} value={a}>
                  {a}
                </option>
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
              onChange={(e) => setBlogCategory(e.target.value)}
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
      <div className="flex gap-3">
        <Button onClick={() => setOpenModal(true)}>Preview</Button>
        <Button color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div>
        <PreviewBlogModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          blogTitle={blogTitle}
          blogCategory={blogCategory}
          blogCover={blogCover}
          editorContent={editorContent}
        />
      </div>
    </div>
  );
};

export default QuillEditor;
