import {
  faCcAmex,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faArrowRight,
  faCircleExclamation,
  faLock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import Loading from "../../Components/Loading/Loading";
import CheckoutSkeleton from "../../Components/Skeleton/CheckoutSkeleton";
import { createOrder } from "../../Services/Payment-service";
import { toast } from "react-toastify";

export default function Checkout() {
  const { cartinfo, isloading, setCartInfo } = useContext(CartContext);
  console.log(cartinfo);

  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const navigate = useNavigate();
  const Schema = yup.object({
    paymentMethod: yup.string().required("payment method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("address  is required"),
      phone: yup
        .string()
        .required("Phone Number is Required")
        .matches(phoneRegex, "ًWe accept Egyptian phone numbers only"),
      city: yup.string().required("City is required"),
    }),
  });

  async function handelCreateOrder(values) {
    try {
      const response = await createOrder({
        cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });
      if (response.success) {
        if (response.data.session) {
          toast.loading("you will be redirected to payment gateway");

          setTimeout(() => {
            location.href = response.data.session.url;
          }, 3000);
          return;
        }
        toast.success("your order has been created successfully");
        setCartInfo({
          numOfCartItems: 0,

          data: {
            products: [],

            totalCartPrice: 0,
          },
        });
        setTimeout(() => {
          navigate(`/Orders`);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema: Schema,
    onSubmit: handelCreateOrder,
  });

  if (isloading || !cartinfo) return <CheckoutSkeleton />;

  const { cartId, numOfCartItems, data } = cartinfo;

  const { totalCartPrice, products } = data;

  return (
    <>
      <PageMetaData title="Checkout Page" />
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-lg sm:text-2xl font-semibold mb-6">Checkout</h1>

          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="bg-white shadow-xl rounded-lg p-6 space-y-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Payment Method
                  </h2>
                  <label
                    htmlFor="cod"
                    className={`${
                      formik.values.paymentMethod === `cod` &&
                      `bg-primary-50 border-primary-500`
                    } flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-2 border-gray-200 p-4 rounded-lg hover:border-primary-500 transition-colors duration-300 w-full`}
                  >
                    <div className="flex gap-3 w-full">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        id="cod"
                        className="size-5 shrink-0 mt-1"
                        onChange={(e) => {
                          formik.setFieldValue("paymentMethod", e.target.value);
                        }}
                        checked={formik.values.paymentMethod === `cod`}
                      />
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-3 items-start flex-wrap">
                          <FontAwesomeIcon
                            icon={faMoneyBillWave}
                            className="text-xl sm:text-2xl text-primary-600 shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="font-semibold text-sm sm:text-base">
                              Cash on Delivery
                            </span>
                            <p className="text-gray-600 text-sm break-words max-w-full">
                              Pay when your order arrives
                            </p>
                          </div>
                        </div>
                        {formik.values.paymentMethod === `cod` && (
                          <div className="flex items-start gap-2 border bg-primary-100 text-primary-600 border-primary-600/50 p-2 rounded-md text-xs sm:text-sm max-w-full">
                            <FontAwesomeIcon
                              icon={faCircleExclamation}
                              className="text-base sm:text-lg mt-1 shrink-0"
                            />
                            <p className="break-words max-w-full text-sm">
                              Please keep exact change ready for hassle-free
                              delivery
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-primary-600 whitespace-nowrap mt-4 sm:mt-0 text-sm sm:text-base">
                      No extra charges
                    </span>
                  </label>

                  <label
                    htmlFor="online"
                    className={`${
                      formik.values.paymentMethod === `online` &&
                      `bg-primary-50 border-primary-500`
                    } flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-2 border-gray-200 p-4 rounded-lg hover:border-primary-500 transition-colors duration-300 w-full`}
                  >
                    <div className="flex gap-3 w-full">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        id="online"
                        className="size-5 shrink-0 mt-1"
                        onChange={(e) => {
                          formik.setFieldValue("paymentMethod", e.target.value);
                        }}
                        checked={formik.values.paymentMethod === `online`}
                      />
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-3 items-start flex-wrap">
                          <FontAwesomeIcon
                            icon={faCcVisa}
                            className="text-xl sm:text-2xl text-primary-600 shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="font-semibold text-sm sm:text-base">
                              Online Payment
                            </span>
                            <p className="text-gray-600 text-sm break-words max-w-full">
                              Pay securely with card or digital wallet
                            </p>
                          </div>
                        </div>
                        {formik.values.paymentMethod === `online` && (
                          <div className="flex items-start gap-2 border bg-blue-100 text-blue-600 border-blue-600/50 p-2 rounded-md text-xs sm:text-sm max-w-full">
                            <FontAwesomeIcon
                              icon={faCircleExclamation}
                              className="text-base sm:text-lg mt-1 shrink-0"
                            />
                            <p className="break-words max-w-full text-sm ">
                              You will be redirected to secure payment gateway
                              to complete your payment
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-primary-600 whitespace-nowrap mt-4 sm:mt-0 text-sm sm:text-base">
                      Recommended
                    </span>
                  </label>
                </div>
              </div>

           
              <div className="bg-white shadow-xl rounded-lg p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  Shipping Address
                </h2>
                <div className="flex flex-col gap-2">
                  <label htmlFor="adressdetails" className="text-sm">
                    Address Details *
                  </label>
                  <textarea
                    className="form-control min-h-20 max-h-60"
                    placeholder="Enter your full address"
                    id="adressdetails"
                    name="shippingAddress.details"
                    value={formik.values.shippingAddress.details}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.errors.shippingAddress?.details &&
                    formik.touched.shippingAddress?.details && (
                      <p className="text-red-600 text-sm ">
                        * {formik.errors.shippingAddress?.details}
                      </p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="phone" className="text-sm">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="01024443168"
                      id="phone"
                      className="form-control"
                      name="shippingAddress.phone"
                      value={formik.values.shippingAddress.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.shippingAddress?.phone &&
                      formik.touched.shippingAddress?.phone && (
                        <p className="text-red-600 text-sm ">
                          * {formik.errors.shippingAddress?.phone}
                        </p>
                      )}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="city" className="text-sm">
                      City *
                    </label>
                    <input
                      type="text"
                      placeholder="Elmahalla Elkobra City"
                      id="city"
                      className="form-control"
                      name="shippingAddress.city"
                      value={formik.values.shippingAddress.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.shippingAddress?.city &&
                      formik.touched.shippingAddress?.city && (
                        <p className="text-red-600 text-sm ">
                          * {formik.errors.shippingAddress?.city}
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>

          
            <div className="bg-white shadow-xl rounded-lg p-6 lg:col-span-4 space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                Order Summary
              </h2>
              <div className="border-b max-h-48 overflow-auto space-y-3 border-gray-300 pb-3 px-2">
                {products.map((product) => {
                  return (
                    <Link
                      to={`/product/${product.product.id}`}
                      key={product._id}
                      className="flex flex-wrap sm:flex-nowrap gap-3 items-center text-sm"
                    >
                      <img
                        src={product.product.imageCover}
                        alt=""
                        className="size-12 object-cover rounded-md shrink-0"
                      />
                      <div className="flex flex-col min-w-0">
                        <h3 className="text-sm truncate max-w-[200px] sm:max-w-none">
                          {product.product.title}
                        </h3>
                        <span className="text-gray-600 text-xs">
                          Qty: {product.count}
                        </span>
                      </div>
                      <span className="ms-auto text-sm whitespace-nowrap">
                        {product.price} EGP
                      </span>
                    </Link>
                  );
                })}
              </div>

              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{totalCartPrice} EGP</span>
                </li>
                <li className="flex justify-between">
                  <span>Delivery</span>
                  <span>70 EGP</span>
                </li>
                <li className="flex justify-between">
                  <span>Tax</span>
                  <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                </li>
                <li className="flex justify-between font-semibold border-t pt-3 border-gray-300">
                  <span>Total</span>
                  <span>
                    {Math.trunc(
                      totalCartPrice + 70 + Math.trunc(totalCartPrice * 0.14)
                    )}
                    EGP
                  </span>
                </li>
              </ul>

              <div className="flex flex-col gap-3 py-4 *:hover:bg-primary-700 *:hover:text-white *:transition-colors *:duration-200">
<button
  type="submit"
  disabled={!(formik.isValid && formik.dirty)}
  className={`btn w-full sm:w-auto flex items-center justify-center gap-2 transition duration-200
    ${formik.isValid && formik.dirty
      ? "bg-primary-600 text-white hover:bg-primary-700"
      : "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300"
    }`}
>
  Proceed to Payment
  <FontAwesomeIcon icon={faArrowRight} />
</button>


                <button className="btn bg-transparent border border-gray-400/50 w-full sm:w-auto">
                  <Link to="/Cart">
                    <FontAwesomeIcon icon={faAngleLeft} className="me-2" />
                    Previous Step
                  </Link>
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold">Secure Checkout</h3>
                <div className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faLock} className="text-primary-600" />
                  <p className="text-gray-600">
                    Your payment information is secure
                  </p>
                </div>
                <div className="space-x-2 text-xl">
                  <FontAwesomeIcon icon={faCcVisa} className="text-[#1A1F71]" />
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    className="text-[#EB001B]"
                  />
                  <FontAwesomeIcon icon={faCcAmex} className="text-[#2E77BC]" />
                  <FontAwesomeIcon
                    icon={faCcPaypal}
                    className="text-[#003087]"
                  />
                  <FontAwesomeIcon icon={faCcApplePay} className="text-black" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
