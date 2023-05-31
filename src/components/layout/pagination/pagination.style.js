import styled from "styled-components";

export const PaginationWrapper = styled.div`
  .react-paginate {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    .pagination-page-item,
    .page-item-break {
      margin-right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      a {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        border-radius: 2px;
        color: #334155;
        width: 20px;
        aspect-ratio: 1 / 1;
        background: #fff;
        padding: 10px;
        text-align: center;
      }
    }

    .pagination-page-item.active-page {
      a {
        background: #1c9fda;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9999px;
        aspect-ratio: 1 / 1;
        color: #ffffff;
      }
    }
  }
`;
