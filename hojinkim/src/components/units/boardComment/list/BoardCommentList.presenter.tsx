import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { BoardCommentListUIProps } from "./BoardCommentList.types";

import InfiniteScroll from "react-infinite-scroller";
export default function BoardCommentListUI(props: BoardCommentListUIProps) {
  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
