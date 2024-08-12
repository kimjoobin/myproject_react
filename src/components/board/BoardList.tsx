import React, {useEffect, useState} from "react";
import {fetchData} from "../api/api";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "../ui/table";
import {Button} from "../ui/button";
import {useNavigate} from "react-router-dom";

const BoardList:React.FC = () => {
    const navigate = useNavigate();

    const [boardList, setBoardList] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchData('/board');
                if (response.status === 200) {
                    setBoardList(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const goDetail = (boardId: number): void => {
        navigate(`/board/detail/${boardId}`, {replace: true});
    }

    return (
        <div className="container mx-auto p-6">
            <Table className="w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">번호</TableHead>
                        <TableHead>제목</TableHead>
                        <TableHead>작성자</TableHead>
                        <TableHead>조회수</TableHead>
                        <TableHead className="text-right">작성일</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {boardList.map((board) => (
                        <TableRow
                            key={board.boardId}
                            className="cursor-pointer hover:bg-gray-100"
                            onClick={() => goDetail(board.boardId)} // 클릭 이벤트가 발생될때만 goDetail 함수 호출
                        >
                            <TableCell className="font-medium">{board.boardId}</TableCell>
                            <TableCell>{board.title}</TableCell>
                            <TableCell>{board.writer}</TableCell>
                            <TableCell>{board.viewCount}</TableCell>
                            <TableCell className="text-right">{board.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="mt-8 space-x-8 flex justify-end">
                <Button onClick={() => navigate('/board/write')}>글쓰기</Button>
                <Button
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="bg-white text-black hover:bg-gray-100"
                >
                    홈으로 가기
                </Button>
            </div>
        </div>
    );
}

export default BoardList;