import PageHeader from '../components/PageHeader'
import ShopCartCard from '../components/ShopCartCard'
import { redTop, suit, blueJean, bluePolo } from '../assets/images'
import Button from '../components/Button'

const shopCartItems = [
    {imgUrl: redTop, price: "$19"},
    {imgUrl: suit, price: "$29"},
    {imgUrl: blueJean, price: "$39"},
    {imgUrl: bluePolo, price: "$49"}
]

const ShopCart = () => {   
  return (
    <section>
        <article className='mb-10'>
            <PageHeader header={"Shop Cart"} firstLink={"Home"} secondLink={"Shop"} activeLink={"Shop Cart"}/> 
        </article>

        <article className='sections-margin-x mb-10 flex flex-col lg:flex-row gap-5'>
            <div className='flex flex-col gap-5 w-full lg:w-[75%]'>
                {
                    shopCartItems.map((item, index) => (
                        <div 
                            key={index}
                        >
                           <ShopCartCard                                
                                price={item.price}
                                imgUrl={item.imgUrl}
                            />  
                            <hr />
                        </div>

                       
                    ))
                }
                <div className='flex justify-between flex-wrap'>
                    <button
                        className='bg-black text-white p-2 uppercase text-[14px] mb-[10px]'
                    >
                        Continue Shopping
                    </button>

                    <div>
                        <button
                            className='bg-gray-300 text-black p-2 mr-3 uppercase text-[14px]'
                        >
                            Clear Cart
                        </button>
                        <button
                            className='bg-gray-300 text-black p-2 uppercase text-[14px]'
                        >
                            Update Cart                            
                        </button>
                    </div>
                </div>                
            </div>

            <div className='w-full lg:w-[31%] bg-gray-100'>
                <div className='p-[1.5rem] border-b-[2px]'>
                    <h1 className='text-xl text-gray-500 mb-3'>APPLY DISCOUNT CODE</h1>
                    <input 
                        type='text' 
                        placeholder='Enter discount code' 
                        className='border-[1px] p-2'
                    />
                    <button className='bg-black p-2 text-white'>APPLY</button> 
                </div>
                <div className='p-[1.5rem]'>
                    <h1 className='text-xl text-gray-500'>Estimate Shipping and Tax</h1>
                    <hr className='mt-[1.5rem]'/>
                </div>     
                <div className='px-[1.5rem] mb-[15px]'>
                    <label>Country Name</label>
                    <select className='w-full p-2'>
                        <option>Nigeria</option>
                        <option>South Africa</option>
                        <option>Kenya</option>
                        <option>Ghana</option>
                        <option>Benin Republic</option>
                    </select>
                </div>  
                <div className='px-[1.5rem] mb-[15px]'>
                    <label>State/Province</label>    
                    <select className='w-full p-2'>
                        <option>Oyo State</option>
                        <option>Osun State</option>
                        <option>Ogun State</option>
                        <option>Lagos State</option>
                    </select>
                </div> 
                <div className='px-[1.5rem] border-b-[2px] pb-[1.5rem]'>
                    <label>Zip/Postal Code</label>   
                    <input type='number' className='w-full p-2 '/>
                </div>

                <div className='px-[1.5rem] my-5'>
                    <div className='flex justify-between'>
                       <p>Subtotal:</p> 
                       <p>$198.00</p>
                    </div>
                    <div className='flex justify-between'>
                       <p>Shipping:</p> 
                       <p>--</p>
                    </div>
                    <div className='flex justify-between'>
                       <p>Taxes:</p> 
                       <p>$14.00</p>
                    </div>
                    <div className='flex justify-between'>
                       <p>Discount:</p> 
                       <p>--</p>
                    </div>
                </div>  
                <hr />
                <div className='flex justify-between px-[1.5rem] my-5'>
                    <p>ORDER TOTAL</p>
                    <p>$212.00</p>
                </div>  
                <div className='px-[1.5rem] pb-3'>
                    <Button label={'PROCEED TO CHECKOUT'} />    
                </div>    
            </div>
        </article>
    </section>
  )
}

export default ShopCart