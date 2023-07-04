import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

function prodects() {

    const { response: data, error, isLoading, fetchData } = useAxios();

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const url = "prodect"; // Replace with the URL for fetching all products
        await fetchData(url);
    };

    const handleDelete = async (productId) => {
        const url = `prodect/${productId}`; // Replace with the URL for deleting a product
        await fetchData(url, "DELETE");
        getAllProducts();
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (data) {
        return (
            <div class="col-12">
                <div class="card text-right card-primary mb-0 card-outline  p-sticky t-15">
                    <div class="card-header">
                        <h3 class="card-title"> المنتجات</h3>
                        <div class="card-tools">
                            <a href="add-prodect.html">
                                <button class="btn btn-primary departments" data-toggle="modal" data-target="#unittModal"><i class="fa fa-plus"></i> اضافة</button>
                            </a>


                            <button type="button" class="btn btn-tool" data-card-widget="maximize"><i class="fas fa-expand"></i></button>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="card-extra clearfix pt-2 pb-3 mb-3">
                            <form action="" method="GET" class="form-inline guide-advanced-search" novalidate="">
                                <input type="hidden" name="_token" value="cAFJKjhjoqZ8XW0J41SJVlZeKazkTsCGGDp8H4Kb" />
                                <div class="form-group mr-">
                                    <label>
                                        <i class="fa fa-cogs ml-1"></i>
                                        <span>بحث متقدم</span>
                                    </label>
                                </div>
                                <div class="form-group mr-2">
                                    <label class="mr-2" for="class"> الماركة </label>
                                    <select name="class" id="class" class=" custom-select" data-select2-id="class" tabindex="-1" aria-hidden="true">
                                        <option value="all" selected="">الكل</option>
                                        <option value="1"> الماركة</option>
                                        <option value="11"> الماركة</option>
                                    </select>
                                </div>
                                <div class="form-group mr-2">
                                    <label class="mr-2" for="unit">  حاله المخزون</label>
                                    <select class="custom-select unit">
                                        <option value="all" selected="">متوفر</option>
                                        <option value="1"> منتهي</option>
                                    </select>
                                </div>

                                <div class="form-group mr-2">
                                    <label class="mr-2" for="unit"> المخزن</label>
                                    <select class="custom-select unit">
                                        <option value="all" selected="">الكل</option>
                                        <option value="1"> الرئسي</option>           <option value="1"> جده</option>
                                    </select>
                                </div>
                                <div class="form-group mr-2">
                                    <label class="mr-2" for="class"> الحالة </label>
                                    <select name="class" id="class" class=" custom-select" data-select2-id="class" tabindex="-1" aria-hidden="true">
                                        <option value="all" selected="">الكل</option>
                                        <option value="1"> نشطة</option>
                                        <option value="11"> غير نشطة</option>
                                    </select>
                                </div>


                                <div class="form-group mr-2">
                                    <label class="mr-2" for="unit">   تاريخ  من</label>
                                    <input class="form-control" type="date" />
                                </div>
                                <div class="form-group mr-2">
                                    <label class="mr-2" for="unit">   الي</label>
                                    <input class="form-control" type="date" />
                                </div>


                                <button type="submit" class="btn btn-primary">
                                    <span>بحث</span>
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div id="datatable_wrapper" class="dataTables_wrapper no-footer">
                            <div class="d-md-flex justify-content-between">

                                <div id="datatable_filter" class="dataTables_filter"><label>
                                    <input type="search" class="" placeholder="بحث" aria-controls="datatable" />
                                </label>
                                </div>

                                <div class="dt-buttons">

                                    <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span> <i class="fa fa-print"></i></span></button>
                                    <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span> <i class="fa fa-file-excel"></i></span></button>
                                    <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span>  <i class="fa fa-info" aria-hidden="true"></i>
                                    </span></button>

                                    <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span>  <i class="fa fa-file-pdf"></i></span></button>

                                </div>

                            </div>
                            <table id="datatable" class="datatable table table-bordered table-striped dataTable no-footer" role="grid">
                                <thead>
                                    <tr role="row">
                                        <th class="  text-center sorting_disabled" rowspan="1" colspan="1"># </th>
                                        <th class=" text-center sorting_disabled" rowspan="1" colspan="1">
                                            المنتج
                                        </th>
                                        <th class="  text-center sorting_disabled" rowspan="1" colspan="1">
                                            الصوره
                                        </th>
                                        <th class="  text-center sorting_disabled" rowspan="1" colspan="1">
                                            فئة
                                        </th>
                                        <th class="  text-center sorting_disabled" rowspan="1" colspan="1">
                                            ماركة
                                        </th>
                                        <th class="  text-center sorting_disabled" rowspan="1" colspan="1">
                                            سعر المبيعات
                                        </th> <th class="  text-center sorting_disabled" rowspan="1" colspan="1">
                                            سعر الشراء
                                        </th>
                                        <th class="  text-center sorting_disabled" rowspan="1" colspan="1">
                                            المخزون الحالي
                                        </th>
                                        <th class="  text-center sorting_disabled" rowspan="1" colspan="1" style={{ "width": "172px" }}>
                                            حاله المخزون
                                        </th>
                                        <th class=" text-center sorting_disabled" rowspan="1" colspan="1">
                                            الخيارات
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.map((prodect, index) => (

                                        <tr role="row" class="odd">
                                            <td class="text-center">{index + 1}</td>
                                            <td class="text-center">
                                                {prodect.name}
                                            </td>
                                            <td class="text-center">
                                                <img src="dist/img/lo.png" />
                                            </td>
                                            <td class="text-center">
                                                {prodect?.category?.name}
                                            </td> <td class="text-center">
                                                {prodect?.brand?.name}

                                            </td>
                                            <td class="text-center">
                                                {prodect.sale_price}
                                                <span className="mx-1">رس</span>
                                            </td> <td class="text-center">
                                                {prodect.purchase_price}
                                                <span className="mx-1">رس</span>

                                            </td>
                                            <td class="text-center">
                                                {prodect.quantity}
                                                <span> </span>
                                                {prodect?.unit?.name ?? 'حبه'}
                                            </td>
                                            <td class="text-center">
                                                <span className={`badge bg-${prodect.quantity > 0 ? "success" : 'danger'}`}>
                                                    {`${prodect.quantity > 0 ? "متوفر" : 'غير متوفر'}`}
                                                </span>

                                            </td>


                                            <td class="text-center">
                                                <Link class="btn btn-info btn-xs" to={'show/' + prodect.id}><i class="fa fa-eye"></i> عرض</Link>
                                                <Link class="btn btn-warning btn-xs" to={'edit/' + prodect.id}><i class="fa fa-eye"></i> تعديل</Link>
                                                <button type="button" class="btn btn-danger btn-xs delete" onClick={() => handleDelete(prodect.id)}>
                                                    <i class="fa fa-trash"></i>
                                                    <span>حذف</span>
                                                </button>


                                            </td>

                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">السابق</a></li>
                                    <li class="paginate_button page-item active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                    <li class="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                    <li class="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                    <li class="paginate_button page-item next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0" class="page-link">التالي</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    return null;
}

export default prodects;
