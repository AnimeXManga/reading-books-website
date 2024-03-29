import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  currentPath: state.books.currentPath,
});

const define = { category: "Danh mục", type: "Thể loại" };

const BreadCrumb = (props) => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => {
      console.log(s);
      return s.charAt(0).toUpperCase() + s.slice(1);
    };
    return (
      <>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Trang chủ</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={index}>
                {capatilize(props.currentPath)}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={index}>
                <Link to={`${routeTo}`}>{capatilize(define[name])}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </>
    );
  };

  return <>{breadCrumbView()}</>;
};

export default connect(mapStateToProps)(BreadCrumb);
