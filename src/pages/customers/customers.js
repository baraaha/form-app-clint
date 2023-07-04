import React from "react";
import ConfigurableTable from "../../components/ConfigurableTable";

function Customers() {

    const columns = ['#', 'التاريخ', 'الرقم الضريبي', 'نوع الدفع', 'مستخدم', 'مبلغ'];
    const data = [
        {
            id: 1,
            date: '17-10-2022',
            tax_number: 'SALE-86',
            payment_type: 'sales',
            name: ' خالد المصري',
            amount: ' رس5.00'
        },
        {
            id: 2,
            date: '17-10-2022',
            tax_number: 'SALE-86',
            payment_type: 'sales',
            name: '  2 خالد المصري',
            amount: ' رس5.00'
        },
    ];

    return (
        <div class="card text-center">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active tab</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tab</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tab</a>
                    </li>

                </ul>
            </div>
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Body</p>
            </div>
        </div>
    );
}

export default Customers;
