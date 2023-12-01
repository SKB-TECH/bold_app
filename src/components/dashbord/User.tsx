import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Inject, Search, Toolbar, Selection, Edit, Filter } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../data';
const User = () => {
  return (
    <div className="m-2 md:m-5 p-2 md:p-10 bg- rounded-3xl">
    <GridComponent
      width="auto"
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
    >
      <ColumnsDirective>
        {
                employeesGrid.map((item:any, index:number) => (
                  <ColumnDirective key={index} {...item} />
                ))
            }
      </ColumnsDirective>
      <Inject services={[Search, Sort, Page, Toolbar]} />
    </GridComponent>
  </div>
  )
}

export default User