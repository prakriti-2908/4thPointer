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
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }

      /* Adjust font size for smaller screens */
      @media (max-width: 768px) {
        .${antCls}-table-cell {
          font-size: 16px; /* Increase font size for smaller screens */
        }
        .${antCls}-table {
          width: 80%;
        }
      }

      .row-light-grey {
        background-color: #f7f7f7;
      }

      /* Ensure that on small screens, table should have horizontal scrolling if needed */
      .responsive-table {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        display: block;
      }
    `,
  };
});

const columns = [
  {
    title: "Order Number",
    dataIndex: "number",
    width: 100,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 80,
  },
  {
    title: "Status",
    dataIndex: "status",
    width: 80,
  },
  {
    title: "Date Created",
    dataIndex: "dateCreated",
    width: 300,
  },
];

const dataSource = Array.from({ length: 100 }).map((_, i) => ({
  key: i,
  number: 376628,
  amount: 493,
  status: "$4565.19",
  dateCreated: "Tue Mar 12 2016 (:46:33 AM",
}));

const OrderTable = () => {
  const { styles } = useStyle();
  return (
    <div className={styles["responsive-table"]}>
      <Table
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 50,
        }}
        rowClassName={(record, index) =>
          index % 2 === 1 ? "row-light-grey" : ""
        }
        scroll={{
          x: "max-content", 
          y: 55 * 5,
        }}
      />
    </div>
  );
};

export default OrderTable;
