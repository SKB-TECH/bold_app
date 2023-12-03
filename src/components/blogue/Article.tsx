import { Pagination } from "antd";
import { CardBlog } from ".."
import femm from '../../assets/modela.jpg'
import { useArticleContext } from "../../contexts/ArticleContext"
import { useNavigationContext } from "../../contexts/NavigationContext";
import { useState } from "react";
import CardSkeleton from "../CardSkeleton";

const PAGE_SIZE = 2;

const Article = () => {
  // @ts-ignore
  const { articles } = useArticleContext();
  // @ts-ignore
  const { loading } = useNavigationContext();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentPageData = articles?.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  return (
      <div className="flex flex-col gap-4 py-2 justify-center items-center">
        <article className="grid  grid-col-1  md:grid-cols-3 w-full md:gap-7 mt-10 md:mt-24 justify-center items-center  md:padding-container ">
          {loading ?
            currentPageData.map((item: any) => (
              <CardBlog img={femm} id={item.idArticle} dates={"20/08/2022"} title={item.title} type={"Article"} />
            ))
            :
            // <Spin size="large" className="" />
            <CardSkeleton />
          }
        </article>
        <Pagination defaultPageSize={PAGE_SIZE} responsive={true} showQuickJumper={false}  defaultCurrent={1} total={articles?.length} onChange={current => handlePageChange(current)} />
      </div>
  )
}

export default Article