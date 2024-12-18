// Define the type for the author
interface Author {
  _id: string;
  name: string;
  email: string;
}

// Define the type for the blog
interface Blog {
  _id: string;
  blogTitle: string;
  blogCategory: string;
  blogCover: string;
  content: string;
  author: Author; // Author is now an object
  createdAt: string;
  updatedAt: string;
}

// Define the type for the blog slice state
interface BlogState {
  blogs: Blog[];
  isLoading: Boolean | null;
  categories: any;
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state
const initialState: BlogState = {
  blogs: [],
  isLoading: false,
  categories: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // Set the list of blogs
    setBlogs(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
    setBlogCategories(state, action: PayloadAction<any>) {
      state.categories = action.payload;
    },
    // Add a new blog
    addBlog(state, action: PayloadAction<Blog>) {
      state.blogs.push(action.payload);
    },

    // Update an existing blog
    updateBlog(state, action: PayloadAction<Blog>) {
      const index = state.blogs.findIndex(
        (blog) => blog._id === action.payload._id
      );
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },

    // Delete a blog
    deleteBlog(state, action: PayloadAction<string>) {
      state.blogs = state.blogs.filter((blog) => blog._id !== action.payload);
    },

    // Set the selected blog
    setIsLoadingBlog(state, action: PayloadAction<Boolean | null>) {
      state.isLoading = action.payload;
    },
  },
});

// Export actions
export const {
  setBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  setIsLoadingBlog,
  setBlogCategories,
} = blogSlice.actions;

// Export reducer
export default blogSlice.reducer;
