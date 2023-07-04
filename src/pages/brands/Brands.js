import React from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

function Brands() {
  const { response: data, error, isLoading } = useAxios("brand");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data) {
    return (
      <div class="container-fluid">
        {/* <!-- Content Header (Page header) --> */}
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-12">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">نظام المحاذن و المشتريات</a>
                  </li>
                  <li class="breadcrumb-item">
                    <span> العلامات التجارية </span>
                  </li>
                </ol>
              </div>
              <div class="col-sm-12">
                <h1> العلامات التجارية </h1>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- /.content-header --> */}
        <div class="col-md-12"></div>
        <section class="content">
          <div
            class="modal fade"
            id="unittModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="unittModalLabel"
            style={{ display: "none;" }}
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content card-primary mb-0 card-outline  p-sticky t-15">
                <div class="modal-header">
                  <h5 class="modal-title" id="unittModalLabel">
                    اضافة
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <form action="unit.html" method="post" novalidate="">
                  <input
                    type="hidden"
                    name="_token"
                    value="h101Moov2kEDoN7GAZ5dSATxgNsC62iHlz1B5MYZ"
                  />
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="title">اسم العلامة التجارية</label>
                      <input
                        type="text"
                        class="form-control"
                        name="Unit_nameAR"
                        placeholder=""
                      />
                      <br />
                      <label for="title">الشعار</label>
                      <input
                        type="file"
                        class="form-control"
                        name="Unit_nameEN"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="modal-footer justify-content-start">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      اغلاق
                    </button>
                    <button type="submit" class="btn btn-primary add">
                      حفظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card text-right card-primary mb-0 card-outline  p-sticky t-15">
                <div class="card-header">
                  <h3 class="card-title"> العلامات التجارية </h3>
                  <div class="card-tools">
                    <button
                      class="btn btn-primary departments"
                      data-toggle="modal"
                      data-target="#unittModal"
                    >
                      <i class="fa fa-plus"></i> اضافة
                    </button>
                    <button
                      type="button"
                      class="btn btn-tool"
                      data-card-widget="maximize"
                    >
                      <i class="fas fa-expand"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- /.card-header --> */}
                <div class="card-body">
                  <div
                    id="datatable_wrapper"
                    class="dataTables_wrapper no-footer"
                  >
                    <div class="d-md-flex justify-content-between">
                      <div id="datatable_filter" class="dataTables_filter">
                        <label>
                          <input
                            type="search"
                            class=""
                            placeholder="بحث"
                            aria-controls="datatable"
                          />
                        </label>
                      </div>

                      <div class="dt-buttons">
                        <button
                          class="btn btn-default"
                          tabindex="0"
                          aria-controls="datatable"
                          type="button"
                        >
                          <span>
                            <i class="fa fa-print"></i>
                          </span>
                        </button>
                        <button
                          class="btn btn-default"
                          tabindex="0"
                          aria-controls="datatable"
                          type="button"
                        >
                          <span>
                            <i class="fa fa-file-excel"></i>
                          </span>
                        </button>
                        <button
                          class="btn btn-default"
                          tabindex="0"
                          aria-controls="datatable"
                          type="button"
                        >
                          <span>
                            <i class="fa fa-info" aria-hidden="true"></i>
                          </span>
                        </button>

                        <button
                          class="btn btn-default"
                          tabindex="0"
                          aria-controls="datatable"
                          type="button"
                        >
                          <span>
                            <i class="fa fa-file-pdf"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                    <table
                      id="datatable"
                      class="datatable table table-bordered table-striped dataTable no-footer"
                      role="grid"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style={{ width: "172px;" }}
                          >
                            #
                          </th>
                          <th
                            class="sorting_disabled text-center"
                            rowspan="1"
                            colspan="1"
                            style={{ width: "455px;" }}
                          >
                            إسم العلامة التجارية
                          </th>
                          <th
                            class="sorting_disabled text-center"
                            rowspan="1"
                            colspan="1"
                            style={{ width: "455px;" }}
                          >
                            شعار
                          </th>
                          <th
                            class="sorting_disabled text-center"
                            rowspan="1"
                            colspan="1"
                            style={{ width: "859px;" }}
                          >
                            والخيارات
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.data.map((brand, index) => (
                          <tr role="row" class="odd">
                            <td>{index + 1}</td>
                            <td class="text-center">{brand.name} </td>

                            <td class="text-center">
                              <img src={brand.image} />
                            </td>
                            <td class="text-center">
                              <Link
                                class="btn btn-info btn-xs"
                                to={`${brand.id}`}
                              >
                                <i class="fa fa-eye"></i> عرض
                              </Link>
                              <button
                                class="btn btn-warning btn-xs departments update"
                                data-action="#"
                                data-title="خدمة العملاء"
                                data-toggle="modal"
                                data-target="#unittModal"
                              >
                                <i class="fa fa-edit"></i> تعديل
                              </button>
                              <button
                                type="button"
                                data-form="#deleteForm-1"
                                class="btn btn-danger btn-xs delete"
                              >
                                <i class="fa fa-trash"></i>
                                <span>حذف</span>
                              </button>
                              <form
                                id="deleteForm-1"
                                action="#"
                                method="POST"
                                novalidate=""
                              >
                                <input
                                  type="hidden"
                                  name="_token"
                                  value="h101Moov2kEDoN7GAZ5dSATxgNsC62iHlz1B5MYZ"
                                />
                                <input
                                  type="hidden"
                                  name="_method"
                                  value="DELETE"
                                />
                              </form>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="example1_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="example1_previous"
                        >
                          <a
                            href="#"
                            aria-controls="example1"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                          >
                            السابق
                          </a>
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="example1"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li class="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="example1"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li class="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="example1"
                            data-dt-idx="3"
                            tabindex="0"
                            class="page-link"
                          >
                            3
                          </a>
                        </li>
                        <li
                          class="paginate_button page-item next"
                          id="example1_next"
                        >
                          <a
                            href="#"
                            aria-controls="example1"
                            data-dt-idx="7"
                            tabindex="0"
                            class="page-link"
                          >
                            التالي
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}
        </section>
      </div>
    );
  }
  return null;
}

export default Brands;
