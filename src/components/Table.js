import React from "react";
import { Table } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      .${antCls}-table {
        .${antCls}-table-container {
          .${antCls}-table-body,
          .${antCls}-table-content {
            scrollbar-width: none;
          }
        }

        .${antCls}-table-cell {
          text-align: center;
        }
      }

      @media (max-width: 768px) {
        .${antCls}-table-cell {
          font-size: 16px;
        }
        .${antCls}-table {
          width: 80%;
        }
      }

      .row-light-grey {
        background-color: #f7f7f7;
      }
    `,
  };
});

const columns = [
  {
    title: "Order Number",
    dataIndex: "number",
    width: 100,
    align:"center"
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 80,
    align:"center"
  },
  {
    title: "Status",
    dataIndex: "status",
    width: 80,
    align:"center"
  },
  {
    title: "Date Created",
    dataIndex: "dateCreated",
    width: 300,
    align:"center",
  },
];

const dataSource = Array.from({ length: 20 }).map((_, i) => ({
  key: i,
  number: 376628,
  amount: 493,
  status: "$4565.19",
  dateCreated: "Tue Mar 12 2016 (:46:33 AM",
}));

const OrderTable = () => {
  const { styles } = useStyle();
  return (
    <div className={styles.customTable}>
      <p className="table-heading">Orders</p>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false} 
        rowClassName={(record, index) =>
          index % 2 === 1 ? "row-light-grey" : ""
        }
      />
    </div>
  );
};

export default OrderTable;