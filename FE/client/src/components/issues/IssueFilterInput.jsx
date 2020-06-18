import React, { useState } from "react";
import styled from "styled-components";
import { NomalButton, NomalInput, DropdownCaret } from "@style/CustomStyle";
import { AiOutlineSearch } from "react-icons/ai";

import FiltersFilter from "@/components/issues/filterList/Filters";
import PikerModal from "@components/issues/PickerModal";

const IssueFilterInput = () => {
  const [bOpen, setbOpen] = useState(false);
  const handleFilterClick = () => setbOpen(!bOpen);
  const filtersFilterList = <FiltersFilter />;

  return (
    <IssueFilterInputWrap>
      {bOpen && (
        <PickerModalWrap>
          <PikerModal title="Filter Issues" pickerModalList={filtersFilterList} />
        </PickerModalWrap>
      )}
      <NomalButton type="button" onClick={handleFilterClick}>
        Filter
        <DropdownCaret />
      </NomalButton>
      <div className="filter-input-wrap">
        <AiOutlineSearch className="search-icon" />
        <NomalInput type="text" placeholder="Search all issues" />
      </div>
    </IssueFilterInputWrap>
  );
};

const IssueFilterInputWrap = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  .filter-input-wrap {
    position: relative;
    width: 100%;
    .search-icon {
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      color: #bdc3c7;
      font-size: 22px;
      z-index: 10;
    }
    input {
      text-indent: 25px;
      font-size: 14px;
    }
  }
`;

const PickerModalWrap = styled.div`
  position: absolute;
  top: 40px;
`;

export default IssueFilterInput;
