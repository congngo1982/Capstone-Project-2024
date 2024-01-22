import { useState } from "react"
import { blog_data } from "../data"

const useBlogs = () => {
  const [blogs,setBlogs] = useState(blog_data)

  return {
    blogs,
    setBlogs,
  }
}

export default useBlogs;