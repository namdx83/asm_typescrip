import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
   <div>
  <div className="btn">
    <span className="fas fa-bars" />
  </div>
  <nav className="sidebar">
    <div className="text">
      Side Menu
    </div>
    <ul>
      <li className="active"><a href="/admin">Dashboard</a></li>
      <li>
        <a href="" className="">Danh mục
        </a>
      </li>
      <li>
        <a href="/admin/products" className="serv-btn">Sản phẩm
        </a>
      </li>
      <li><a href="">Username</a></li>
      <li><a href="">Comment</a></li>
      <li><a href="#">log out</a></li>
    </ul>
  </nav>

</div>


  )
}
export default Dashboard