import React, { useEffect, useState } from 'react'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import { categoryService } from '~/services/category-service'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    categoryService.getCategories()
      .then((res) => setCategories(res.data.items || []))
      .catch((err) => console.error(err))
  }, [])

  return (
    <PageWrapper>
      <h1>Categories</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat._id}>{cat.name}</li>
        ))}
      </ul>
    </PageWrapper>
  )
}

export default Categories
