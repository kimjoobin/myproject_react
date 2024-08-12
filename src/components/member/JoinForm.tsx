import React, {useState} from "react";
import {Card, CardDescription, CardFooter, CardTitle} from "../ui/card";
import {CardContent, CardHeader} from "../ui/card";
import {Label} from "../ui/label";
import {Input} from "../ui/input";
import {Button} from "../ui/button";

const JoinForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        // form 제출 시 브라우저의 기본동작 방지
        e.preventDefault();
    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>회원가입</CardTitle>
                <CardDescription>새 계정을 만들어 시작하세요.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="username">사용자 이름</Label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="사용자 이름을 입력하세요"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">이메일</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="이메일을 입력하세요"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">비밀번호</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="비밀번호를 다시 입력하세요"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">취소</Button>
                <Button onClick={handleSubmit}>가입하기</Button>
            </CardFooter>
        </Card>
    );
}

export default JoinForm;