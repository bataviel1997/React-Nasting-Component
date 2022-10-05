import React from "react";
import ImageCard from "./components/ImageCard";
import Paper from "./components/Paper";
import MobileLayout from "./layouts/MobileLayout";

export default function App(){



  return (
    <div>
      <h1>Heloo diluar mobilelayout</h1>

      <MobileLayout>
        <h3>ini didalam mobilelayout</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita repellat soluta ratione laudantium sunt ullam natus deserunt, veritatis, consequuntur saepe id a fugit beatae suscipit eveniet? Inventore, ab aut?
        </p>

        <Paper width={300} height={200}>
          <h1>Elbatavi</h1>
          akjdhwkjh
        </Paper>

        <Paper>
          <h1>Nama Saya</h1>
          <h1>Elbatavi</h1>
        </Paper>

        <ImageCard 
        left={
          <div style={{ flex : 1 }}>
            <img src="https://images.unsplash.com/photo-1660663577778-c45295fc2dec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt=""
            style={{
              width : 150,
              height : 150,
              objectFit : 'cover',
              borderRadius : 12
            }} />
          </div>
          } 
        right={
          <div style={{ flex : 3 }}>
             There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
          </div>
        }/>
      </MobileLayout>
      
    </div>
  )
}