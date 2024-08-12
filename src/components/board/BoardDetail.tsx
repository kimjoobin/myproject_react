import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchData} from "../api/api";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Separator} from "../ui/separator";
import {Edit, Home, Trash2} from "lucide-react";
import {Button} from "../ui/button";

const BoardDetail = () => {
    const [board, setBoard] = useState<any>({});
    const { id } = useParams();

    const getBoard = async (): Promise<void> => {
        try {
            const response = await fetchData(`/board/${id}`);
            if (response.status === 200) {
                setBoard(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBoard(); // 컴포넌트 마운트시 데이터 가져옴
    }, [id]);   // id가 변경될 때마다 호출

    return (
        <>
            <Card className="w-[600px] mx-auto my-8 border-t-4 border-t-blue-500">
                <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-center">{board.title}</CardTitle>
                    <p className="text-sm text-center text-gray-500 mt-1">
                        작성자: {board.writer} | 등록일자: {board.createdAt}
                    </p>
                </CardHeader>
                <Separator className="my-2" />
                <CardContent>
                    <p className="text-base">{board.contents}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" >
                        <Home className="mr-4 h-4 w-4" /> 홈
                    </Button>
                    <div>
                        <Button variant="outline" className="mx-8">
                            <Edit className="mr-4 h-4 w-4" /> 수정
                        </Button>
                        <Button variant="destructive" >
                            <Trash2 className="mr-4 h-4 w-4" /> 삭제
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default BoardDetail;