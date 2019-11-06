import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const InfoBox = styled.div`
    background-color:  #C29679;
    padding: 20px 20px 20px 20px;
    color: #ffffff;
    font-family: 'Itim', cursive;
    font-size: 22px;
    line-height: 35px;
`

export default class Info extends React.Component {
    render() {
        return(
            <div>
                <InfoBox>
                <p> 
                    สุนัขจิ้งจอกเป็นสุนัขขนาดกลางมีขนสีน้ำตาลแกมเหลือง
                    <br/>
                    มีลายเป็นเป็นริ้วสีจางคล้ายรูปอานบนหัวไหล่ หูใหญ่ 
                    <br/>
                    หางสั้นเป็นพวงสีน้ำตาล พบในเนปาล อัสสัม พม่า 
                    <br/>
                    ในประเทศไทยพบมากทางภาคอีสาน 
                </p>
                <p>
                    <span className="ml-4">สุนัขจิ้งจอกชอบออกหากินในเวลากลางคืน</span>
                    <br/>
                    ส่วนเวลากลางวันมักจะนอนในโพรงดิน 
                    <br/>
                    เขาจะกินสัตว์เล็ก ๆ กินซากสัตว์ รวมทั้งผลไม้
                    <br/>
                    หากมีหลายตัวอาจจะไล่จับกินสัตว์ที่มีขนาดใหญ่
                </p>
                <p className="text-center">
                    แต่ถ้าหากคุณอยากรู้เกี่ยวกับเขาต่อ
                    <br/>
                    <div className="d-flex justify-content-center">
                        <div className="link-bg">
                            <a href="http://animalcutehistory.blogspot.com/2012/10/blog-post_10.html" rel="noopener noreferrer" target="_blank" className="link">คลิ๊กที่นี่!</a>
                        </div>
                   </div>
                </p>
                <p>
                    <span className="ml-4">และด้วยที่ว่า จิ้งจอกเป็นสัตว์ที่แสดงสีหน้าได้</span>
                    <br/>
                    ส่วนนี้คนอาจมองว่าเป็นสัตว์เจ้าเล่ห์ 
                    <br/>
                    ทำให้ภาพลักษณ์เป็นเชิงลบ
                    <br/>
                    กล่าวโดยสรุปเลยก็คือสุนัขจิ้งจอกเป็นเหยื่อของมนุษย์
                    <br/>
                    ทั้งการถูกสวมบทบาทให้รับบทผู้ร้าย
                    <br/>
                    และยังถูกฆ่าเพื่อขนอีก เพราะในความเป็นจริง
                    <br/>
                    สุนัขจิ้งจอกนั้นเป็นสัตว์รักสงบ
                    <br/>
                    และไม่ได้ขี้โกงเจ้าเล่ห์แบบที่เราเข้าใจเลย
                </p>
                </InfoBox>
            </div>
        )
    }
}