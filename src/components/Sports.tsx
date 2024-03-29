'use client'

import Link from "next/link"
import Cards from "./Cards"
import AdCard from "./AdCard"

function Sports() {
  return (
    <div>
        <h1 className="font-bold text-3xl w-full">Sports</h1>
        <hr className="w-24 p-[1px] my-2 bg-blue-300"/>
        <div className="flex py-5 max-[700px]:gap-10 max-[700px]:flex-wrap  gap-8 justify-center items-center">
         <Cards name="Sacramento River Cats" events={48} sports="Basketball" image={'https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2XxKQcUNpnjUfqPSEoBDs1fA2T2ynT30pmeBbbJh8ADDuqsounqPy2h5snUTaNLrXmBSn3WLCzp0n2OT-QW-YTvS-z2mJHJ6qjt2YKrUp47e-cjjKeMCUFbLFl1st3rJjLbv0LslNuyK2PcJ7sfJvoojd2jJrTkPwtCe~fh8aXrwNSkOfd6fBp5EH6WVggIjH~17u23Nxit7mJ3gnCJVAFnyCwu7GXicoEtWv3OQ6g4X7r91yeBwHIuSi~KlMIqvE57pklcMv80Q6TC5meP~-Tk70JwQVh9kJFCBf5kGia04Ta-8Jgjo8h6GaYCkbtJuphhniHWXT4dnVFsj7xMmQ__'} />
         <Cards name="Las Vegas Aviators" events={28} sports="Baseball" image="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__" />
         <Cards name="new jersey devils" events={15} sports="Ice Hockey" image="https://s3-alpha-sig.figma.com/img/b290/2f7a/b2fcf21c696811f745109da24a740d73?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SL2NyvBA-RmV9CySCr0HqaIDFJPJfx24z5ukOpUhta6I9GYXc65jVXyjYdWiNUOcTOt2pbLQb2rK1ME8yx1Xkvvw14syZfWGf9I-Bx~7rNiIGN4EetaP9GdAdoJpMJP2cYcwI2HwhG5p4P~LHqFKou0RO~ZEZcMOPJxJct8ini~YOjXlxwbDdvfk6v8UGdmtaXuR43hC36YWrAdNVcfWnkNY3LrxnefSV6pJmr6-M9fOwGOpWFqWE08XG9YjfexBZQmEM7MLfm338bYXaIXLtAwQGvnhqrrmwCl4wHPPc95mDocM14BBhj8aUaDvPMpBAWUKhw2OYXVoUBbvcNditw__"/>
         <Cards name="Las Vegas Aviators" events={28} sports="Baseball" image="https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnhdy7dQOQtLfNEts8Y48S1XXIo78WTAF8NMCby7P4sjC6OTdliMhF0d0tAj~lmWSrjvqUtg7~AfR9Cu7UzkprB34TEfUwdP17WZw6ak-PHZ5KUq43yWAfJQbKTahlsvrfN9t8YcNsp538gquzN~Q4gOC5DyWALE0EhpvBxb4NimSNiTG4WjdxfSwz5eOHvqWLk57~o3erxXoDjv0quRDx7PvAKyLnzLkW7L-2ivUCwu1QnVd4ZEDQez5aU8Gf0CRrwva7Tsoj5ZuQdw1yBolX9aJ1deMVeCinrZUWkKaLkTntZYMMP5GuIM9pr2sCp3MZiCGDZnwtQBcQwh0gS0TQ__" />
         <AdCard title="Advertisment title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfHZuev7WUagkCJeDUVdHbkG5bqC2YmjXKJSZLKbyymg8PLUCF1d-3ITeG2OSpcKgHjVq3lbGf7eLgT0-RWii9vAbSSrltvD7RI88jX3A1p0QZTvL~643uJOzylJw00w1DWQKzrTEHLkK2D4jxJ4n3C9D03B-Odrn9zVjUWBi9mqnU5op991kONICO-AT7eCWb2APcuZxUGYnj8xpoj5L5modFS2ABEy2X1gaT0HXJZoVu2276JkODvrtjnC3F4~lM3f7rLQQam1iI8a3frGTCuFQfbXM3VAQ7nfBJDVDCcyeJcyc4m1oPldx2ONzo2CGn5jRfonRO5RlD-OHbierA__"/>
        </div>
         <div className="flex py-5 justify-center items-center gap-5">
          <Link href={"/"}>
          
           <button className="bg-blue-500 hover:scale-105 hover:bg-blue-300  font-serif px-5 py-2 border-none  text-white rounded-sm text-[0.85rem] font-bold ">See More</button>
          </Link>
         </div>
    </div>
  )
}

export default Sports