import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const Find = ({ dataSource, setDataSource }) => {
  let data;
  const onSearch = (value) => {
    data = dataSource.filter((item) =>  {return item.title.toLowerCase().includes(value.toLowerCase())} );
    setDataSource(data);
  };

  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="Search Here"
          onSearch={onSearch}
          style={{ width: 400 }}
        />
      </Space>
    </div>
  );
};

export default Find;
