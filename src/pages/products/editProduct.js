import React from 'react'

const editProdect = () => {
    return (
        <div class="container-fluid">


            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">نظام
                                        المحاذن و المشتريات
                                    </a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="stores.html">
                                        ادارة المنتجات
                                    </a>
                                </li>
                                <li class="breadcrumb-item">
                                    <span>المنتجات </span>
                                </li>    <li class="breadcrumb-item">
                                    <span>عرض المنتجات  </span>
                                </li>
                            </ol>
                        </div>
                        <div class="col-sm-12">
                            <h1> عرض المنتج </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="card card-widget widget-user">
                        <div class="widget-user-header bg-info">
                            <h3 class="widget-user-username"></h3>
                            <h5 class="widget-user-desc"></h5>
                        </div>
                        <div class="widget-user-image">
                            <img class="img-circle elevation-2" src="../dist/img/user1-128x128.jpg" alt="User Avatar" />
                        </div>
                        <div class="card-footer">
                            <div class="row">

                                <div class="col-sm-12 border-right">
                                    <div class="card-footer p-0">
                                        <div class="nav  bord  ">
                                            <div class="col-6 nav-link">
                                                اسم المننتج
                                            </div>
                                            <div class="col-6 nav-link">
                                                نظارة كبيرة

                                            </div>
                                            <div class="col-6 nav-link">
                                                رمز الصنف
                                            </div>
                                            <div class="col-6 nav-link">
                                                454545
                                            </div>
                                            <div class="col-6 nav-link">
                                                فئة
                                            </div>
                                            <div class="col-6 nav-link">
                                                نظارات

                                            </div>
                                            <div class="col-6 nav-link">
                                                ماركة
                                            </div>
                                            <div class="col-6 nav-link">
                                                ابوليث
                                            </div>
                                            <div class="col-6 nav-link">
                                                المخزون الحالي
                                            </div>
                                            <div class="col-6 nav-link">
                                                20 حبه
                                            </div>
                                            <div class="col-6 nav-link">
                                                تنبيه الكمية
                                            </div>
                                            <div class="col-6 nav-link">
                                                10 حبات
                                            </div>
                                            <div class="col-6 nav-link">
                                                سعر المبيعات
                                            </div>
                                            <div class="col-6 nav-link">
                                                رس 180.00 (مع الضريبة)

                                            </div>
                                            <div class="col-6 nav-link">
                                                سعر الشراء
                                            </div>
                                            <div class="col-6 nav-link">
                                                رس 40.00 (بدون ضريبة)

                                            </div>
                                            <div class="col-6 nav-link">
                                                MRP
                                            </div>
                                            <div class="col-6 nav-link">
                                                1
                                            </div>
                                            <div class="col-6 nav-link">
                                                معدل الضريبة
                                            </div>
                                            <div class="col-6 nav-link">
                                                15%

                                            </div>
                                            <div class="col-6 nav-link">
                                                افتتاح المخزون
                                            </div>
                                            <div class="col-6 nav-link">
                                                500 حبة
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">


                    <section class="content">
                        <div class="card card-primary card-outline card-outline-tabs">
                            <div class="card-header p-0 border-bottom-0">
                                <ul class="nav nav-tabs" id="tabs-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="tabs-stores-tab" data-toggle="pill" href="#tabs-stores" role="tab" aria-controls="tabs-stores" aria-selected="true"> طلبات المنتجات </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="tabs-shelve-tab" data-toggle="pill" href="#tabs-shelve" role="tab" aria-controls="tabs-shelve" aria-selected="false"> المخزن </a>
                                    </li>


                                </ul>
                            </div>
                            <div class="card-body ">
                                <div class="tab-content" id="tabs-tabContent">
                                    <div class="tab-pane fade active show" id="tabs-stores" role="tabpanel" aria-labelledby="tabs-stores-tab">

                                        <section class="content">
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
                                                            <label class="mr-2" for="unit"> نوع الطلب </label>
                                                            <select class="custom-select unit">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> مبيعات</option>
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
                                                        </label></div>

                                                        <div class="dt-buttons">

                                                            <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span> <i class="fa fa-print"></i></span></button>
                                                            <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span> <i class="fa fa-file-excel"></i></span></button>
                                                            <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button">
                                                                <span>  <i class="fa fa-info" aria-hidden="true"></i>
                                                                </span>
                                                            </button>

                                                            <button class="btn btn-default" tabindex="0" aria-controls="datatable" type="button"><span>  <i class="fa fa-file-pdf"></i></span></button>

                                                        </div>

                                                    </div>
                                                    <table id="datatable" class="datatable table table-bordered table-striped dataTable no-footer" role="grid">
                                                        <thead>
                                                            <tr role="row">
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1"># </th>
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    تاريخ الطلب		</th>
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    نوع الطلب	</th>
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    كمية	</th>    <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    سعر الوحدة	 </th> <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    تخفيض	 </th>
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    ضريبة	 </th>

                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    المجموع الفرعي
                                                                </th>




                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 11:46 مساءً	</td>
                                                                <td class="text-center">مبيعات		</td>
                                                                <td class="text-center"> 10 حبة		   </td>
                                                                <td class="text-center">رس156.52	</td>
                                                                <td class="text-center"> رس0.00 (0%)		</td>    <td class="text-center"> رس234.78 (15%)			</td> <td class="text-center"> رس1,800.00
                                                                </td>


                                                            </tr>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 11:46 مساءً	</td>
                                                                <td class="text-center">مبيعات		</td>
                                                                <td class="text-center"> 10 حبة		   </td>
                                                                <td class="text-center">رس156.52	</td>
                                                                <td class="text-center"> رس0.00 (0%)		</td>    <td class="text-center"> رس234.78 (15%)			</td> <td class="text-center"> رس1,800.00
                                                                </td>


                                                            </tr>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 11:46 مساءً	</td>
                                                                <td class="text-center">مبيعات		</td>
                                                                <td class="text-center"> 10 حبة		   </td>
                                                                <td class="text-center">رس156.52	</td>
                                                                <td class="text-center"> رس0.00 (0%)		</td>    <td class="text-center"> رس234.78 (15%)			</td> <td class="text-center"> رس1,800.00
                                                                </td>


                                                            </tr>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 11:46 مساءً	</td>
                                                                <td class="text-center">مبيعات		</td>
                                                                <td class="text-center"> 10 حبة		   </td>
                                                                <td class="text-center">رس156.52	</td>
                                                                <td class="text-center"> رس0.00 (0%)		</td>    <td class="text-center"> رس234.78 (15%)			</td> <td class="text-center"> رس1,800.00
                                                                </td>


                                                            </tr>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 11:46 مساءً	</td>
                                                                <td class="text-center">مبيعات		</td>
                                                                <td class="text-center"> 10 حبة		   </td>
                                                                <td class="text-center">رس156.52	</td>
                                                                <td class="text-center"> رس0.00 (0%)		</td>    <td class="text-center"> رس234.78 (15%)			</td> <td class="text-center"> رس1,800.00
                                                                </td>


                                                            </tr>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 11:46 مساءً	</td>
                                                                <td class="text-center">مبيعات		</td>
                                                                <td class="text-center"> 10 حبة		   </td>
                                                                <td class="text-center">رس156.52	</td>
                                                                <td class="text-center"> رس0.00 (0%)		</td>    <td class="text-center"> رس234.78 (15%)			</td> <td class="text-center"> رس1,800.00
                                                                </td>


                                                            </tr>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 11:46 مساءً	</td>
                                                                <td class="text-center">مبيعات		</td>
                                                                <td class="text-center"> 10 حبة		   </td>
                                                                <td class="text-center">رس156.52	</td>
                                                                <td class="text-center"> رس0.00 (0%)		</td>    <td class="text-center"> رس234.78 (15%)			</td> <td class="text-center"> رس1,800.00
                                                                </td>


                                                            </tr>




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


                                        </section>

                                    </div>
                                    <div class="tab-pane fade" id="tabs-shelve" role="tabpanel" aria-labelledby="tabs-shelve-tab">


                                        <section class="content">
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
                                                            <label class="mr-2" for="class">السنة المالية </label>
                                                            <select name="class" id="class" class=" custom-select" data-select2-id="class" tabindex="-1" aria-hidden="true">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> 2020</option>
                                                                <option value="11"> 2021</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group mr-2">
                                                            <label class="mr-2" for="unit"> رقم المشروع</label>
                                                            <select class="custom-select unit">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> 1 رقم المشروع </option>
                                                            </select>
                                                        </div>

                                                        <div class="form-group mr-2">
                                                            <label class="mr-2" for="unit"> الفرع</label>
                                                            <select class="custom-select unit">
                                                                <option value="all" selected="">الكل</option>
                                                                <option value="1"> 1 الفرع </option>
                                                            </select>
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
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1"># </th>
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    تاريخ	</th>
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    نوع الطلب		</th>
                                                                <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    كمية	</th>    <th class="sorting_disabled text-center" rowspan="1" colspan="1">
                                                                    Stocks		 </th> <th class="sorting_disabled text-center " rowspan="1" colspan="1">
                                                                    Remarks
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr role="row" class="odd">
                                                                <td class="text-center"> 1</td>
                                                                <td class="text-center"> 18-10-2022 04:00 pm	</td>
                                                                <td class="text-center">مبيعات	</td>
                                                                <td class="text-center">18	   </td>
                                                                <td class="text-center">خارج</td>
                                                                <td class="text-center"> يضيف	</td>


                                                            </tr>



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


                                        </section>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div></div>
        </div>
    )
}

export default editProdect