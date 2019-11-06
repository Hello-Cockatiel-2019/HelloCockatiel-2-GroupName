import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const FoxContent = styled.div`
    background-color: #C29679;
`
const Passage = styled.div`
    padding-top: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    margin-left: 70px;
    color: #ffffff;
    font-family: 'Itim', cursive;
    font-size: 24px;
`

const LastLine = styled.span`
    margin-left: 150px;
`


export default class Content extends React.Component {
    render() {
        return (
            <FoxContent>
                <Passage>
                    <p>
                        เขามีความดุร้ายของสิงโต
                        <br/>
                        แต่ก็มีความขี้ระแวงของกระต่าย 
                        <br/>
                        และยังมีความฉลาดพร้อมกับเล่ห์เหลี่ยม เขานั้นคือ
                        <br/>
                        “สุนัขจิ้งจอก”
                    </p>
                    <p>
                        <span className="ml-5">เคยได้ยินไหมว่า</span> 
                        <br/>
                        “ฉลาดแกมโกงเหมือนสุนัขจิ้งจอก” 
                        <br />
                        มันเป็นวลีปกติในการพูดในชีวิตประจำวัน
                        <br/>
                        ในหลาย ๆ ส่วนของโลกเพราะสัตว์เหล่านี้เกี่ยวข้องกับ
                        <br/>
                        ความฉลาดและไหวพริบ แต่ก็มีการหลอกลวง
                        <br/>
                        <span className="ml-5">ถ้าหากคุณอยากรู้เกี่ยวกับตัวเขาให้มากขึ้น </span>
                        <br/>
                        <LastLine>ก็อย่ามัวรีรอ คลิ๊กที่ INFO กันเลย!</LastLine>
                    </p>
                </Passage>
            </FoxContent>
        )
    }
}