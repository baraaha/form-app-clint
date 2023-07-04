import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function ProductDetails() {
    const { id } = useParams(); // Retrieve the id from the URL parameter
    const { response: data, error, isLoading, fetchData } = useAxios();
    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchBrand = async () => {
            const url = `product/${id}`; // Replace with your API endpoint for fetching a brand
            await fetchData(url);
            console.log('data', data.data);
            setProduct(data.data);
            setItems(data.data.invoiceItems);
        };

        fetchBrand();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data || !data.data) {
        return <div>
            <h1>Product Details</h1>
        </div>
    }
    else {


        // Display the brand details
        // const { id, name, description } = response;
        return (<div className="container-fluid">


            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">نظام
                                        المحاذن و المشتريات
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="stores.html">
                                        ادارة المنتجات
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <span>المنتجات </span>
                                </li>    <li className="breadcrumb-item">
                                    <span>عرض المنتجات  </span>
                                </li>
                            </ol>
                        </div>
                        <div className="col-sm-12">
                            <h1> عرض المنتج </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card card-widget widget-user">
                        <div className="widget-user-header bg-info">
                            <h3 className="widget-user-username"></h3>
                            <h5 className="widget-user-desc"></h5>
                        </div>
                        <div className="widget-user-image">
                            <img className="img-circle elevation-2" src={product?.image} alt="User Avatar" />
                        </div>
                        <div className="card-footer">
                            <div className="row">

                                <div className="col-sm-12 border-right">
                                    <div className="card-footer p-0">
                                        <div className="nav  bord  ">
                                            <div className="col-6 nav-link">
                                                اسم المننتج
                                            </div>
                                            <div className="col-6 nav-link">
                                                {product?.name}

                                            </div>
                                            <div className="col-6 nav-link">
                                                رمز الصنف
                                            </div>
                                            <div className="col-6 nav-link">
                                                454545
                                            </div>
                                            <div className="col-6 nav-link">
                                                فئة
                                            </div>
                                            <div className="col-6 nav-link">
                                                {product?.category?.name}


                                            </div>
                                            <div className="col-6 nav-link">
                                                ماركة
                                            </div>
                                            <div className="col-6 nav-link">
                                                {product?.brand?.name}

                                            </div>
                                            <div className="col-6 nav-link">
                                                المخزون الحالي
                                            </div>
                                            <div className="col-6 nav-link">

                                                <span>
                                                    {product?.quantity}
                                                </span>
                                                <span className='mx-1'>
                                                    {product?.unit?.name}
                                                </span>
                                            </div>
                                            <div className="col-6 nav-link">
                                                تنبيه الكمية
                                            </div>
                                            <div className="col-6 nav-link">
                                                10 حبات
                                            </div>
                                            <div className="col-6 nav-link">
                                                سعر المبيعات
                                            </div>
                                            <div className="col-6 nav-link">
                                                <span className='mx-1'>
                                                    {product?.sale_price}
                                                </span>
                                                <span className='mx-1'>
                                                    رس
                                                </span>

                                            </div>
                                            <div className="col-6 nav-link">
                                                سعر الشراء
                                            </div>
                                            <div className="col-6 nav-link">

                                                <span className='mx-1'>
                                                    {product?.purchase_price}
                                                </span>
                                                <span className='mx-1'>
                                                    رس
                                                </span>
                                            </div>
                                            <div className="col-6 nav-link">
                                                MRP
                                            </div>
                                            <div className="col-6 nav-link">
                                                {product?.mrb}
                                            </div>
                                            <div className="col-6 nav-link">
                                                معدل الضريبة
                                            </div>
                                            <div className="col-6 nav-link">
                                                {product?.tax?.rate}%

                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">


                    <section className="content">
                        <div className="card card-primary card-outline card-outline-tabs">
                            <div className="card-header p-0 border-bottom-0">
                                <ul className="nav nav-tabs" id="tabs-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tabs-stores-tab" data-toggle="pill" href="#tabs-stores" role="tab" aria-controls="tabs-stores" aria-selected="true"> طلبات المنتجات </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tabs-shelve-tab" data-toggle="pill" href="#tabs-shelve" role="tab" aria-controls="tabs-shelve" aria-selected="false"> المخزن </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body ">
                                <div className="tab-content" id="tabs-tabContent">
                                    <div className="tab-pane fade active show" id="tabs-stores" role="tabpanel" aria-labelledby="tabs-stores-tab">


                                        <section className="content">
                                            <div className="card-body">
                                                <div className="card-extra clearfix pt-2 pb-3 mb-3">
                                                    <form action="" method="GET" className="form-inline guide-advanced-search" novalidate="">
                                                        <input type="hidden" name="_token" value="cAFJKjhjoqZ8XW0J41SJVlZeKazkTsCGGDp8H4Kb" />
                                                        <div className="form-group mr-">
                                                            <label>
                                                                <i className="fa fa-cogs ml-1"></i>
                                                                <span>بحث متقدم</span>
                                                            </label>
                                                        </div>

                                                        <div className="form-group mr-2">
                                                            <label className="mr-2" for="unit"> نوع الطلب </label>
                                                            <select className="custom-select unit">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> مبيعات</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group mr-2">
                                                            <label className="mr-2" for="unit">   تاريخ  من</label>
                                                            <input className="form-control" type="date" />
                                                        </div>
                                                        <div className="form-group mr-2">
                                                            <label className="mr-2" for="unit">   الي</label>
                                                            <input className="form-control" type="date" />
                                                        </div>


                                                        <button type="submit" className="btn btn-primary">
                                                            <span>بحث</span>
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                                <div id="datatable_wrapper" className="dataTables_wrapper no-footer">
                                                    <div className="card">
                                                        <DataTable value={items} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                                                            <Column field="created_at" header="التاريخ" ></Column>
                                                            <Column field="product.name" header="الاسم" ></Column>
                                                            <Column field="qyt" header="الكميه" ></Column>
                                                            <Column field="price" header="سعر الوحده" ></Column>
                                                            <Column field="product.tax.rate" header="الضريبه" ></Column>
                                                            <Column field="sub_total" header="المجموع الفرعي" ></Column>
                                                        </DataTable>
                                                    </div>
                                                </div>
                                            </div>


                                        </section>

                                    </div>
                                    <div className="tab-pane fade" id="tabs-shelve" role="tabpanel" aria-labelledby="tabs-shelve-tab">


                                        <section className="content">
                                            <div className="card-body">
                                                <div className="card-extra clearfix pt-2 pb-3 mb-3">
                                                    <form action="" method="GET" className="form-inline guide-advanced-search" novalidate="">
                                                        <input type="hidden" name="_token" value="cAFJKjhjoqZ8XW0J41SJVlZeKazkTsCGGDp8H4Kb" />
                                                        <div className="form-group mr-">
                                                            <label>
                                                                <i className="fa fa-cogs ml-1"></i>
                                                                <span>بحث متقدم</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-group mr-2">
                                                            <label className="mr-2" for="class">السنة المالية </label>
                                                            <select name="class" id="class" className=" custom-select" data-select2-id="class" tabindex="-1" aria-hidden="true">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> 2020</option>
                                                                <option value="11"> 2021</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group mr-2">
                                                            <label className="mr-2" for="unit"> رقم المشروع</label>
                                                            <select className="custom-select unit">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> 1 رقم المشروع </option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group mr-2">
                                                            <label className="mr-2" for="unit"> الفرع</label>
                                                            <select className="custom-select unit">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> 1 الفرع </option>
                                                            </select>
                                                        </div>

                                                        <button type="submit" className="btn btn-primary">
                                                            <span>بحث</span>
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                                <div id="datatable_wrapper" className="dataTables_wrapper no-footer">
                                                    <div className="d-md-flex justify-content-between">

                                                        <div id="datatable_filter" className="dataTables_filter"><label>
                                                            <input type="search" className="" placeholder="بحث" aria-controls="datatable" />
                                                        </label>
                                                        </div>

                                                        <div className="dt-buttons">

                                                            <button className="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span> <i className="fa fa-print"></i></span></button>
                                                            <button className="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span> <i className="fa fa-file-excel"></i></span></button>
                                                            <button className="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span>  <i className="fa fa-info" aria-hidden="true"></i>
                                                            </span></button>

                                                            <button className="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span>  <i className="fa fa-file-pdf"></i></span></button>

                                                        </div>

                                                    </div>
                                                    <table id="datatable" className="datatable table table-bordered table-striped dataTable no-footer" role="grid">
                                                        <thead>
                                                            <tr role="row">
                                                                <th className="sorting_disabled text-center" rowspan="1" colspan="1"># </th>
                                                                <th className="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    تاريخ	</th>
                                                                <th className="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    نوع الطلب		</th>
                                                                <th className="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    كمية	</th>    <th className="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    Stocks		 </th> <th className="sorting_disabled text-center " rowspan="1" colspan="1">
                                                                    Remarks
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr role="row" className="odd">
                                                                <td className="text-center"> 1</td>
                                                                <td className="text-center"> 18-10-2022 04:00 pm	</td>
                                                                <td className="text-center">مبيعات	</td>
                                                                <td className="text-center">18	   </td>
                                                                <td className="text-center">خارج</td>
                                                                <td className="text-center"> يضيف	</td>


                                                            </tr>



                                                        </tbody>
                                                    </table>
                                                    <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                                        <ul className="pagination">
                                                            <li className="paginate_button page-item previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" className="page-link">السابق</a></li>
                                                            <li className="paginate_button page-item active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" className="page-link">1</a></li>
                                                            <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" className="page-link">2</a></li>
                                                            <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" className="page-link">3</a></li>
                                                            <li className="paginate_button page-item next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0" className="page-link">التالي</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


                                        </section>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        )
    }

    return null;

}

export default ProductDetails