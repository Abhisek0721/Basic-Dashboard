import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { FaLinkedinIn, FaPhone, FaRegEnvelope, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ShowTable = (props) => {
    const {
        result
    } = props;

    return (
        <tbody className="w-full">
            {result?.length === 0 ? (
                <h1 className="w-[10rem]">There is no data</h1>
            ) : (
                result?.map((singleData, index) => (
                    <tr key={singleData._id}>
                        <td>
                            {singleData?.start_year}
                        </td>

                        <td className="text-[13px]">
                            {singleData?.end_year}
                        </td>

                        <td>
                            {singleData?.intensity}
                        </td>
                        <td>{singleData?.sector}</td>

                        <td
                            className="text-center cursor-pointer"
                        >
                            {singleData?.topic}
                        </td>

                        <td className="text-center">
                            {singleData?.insight}
                        </td>
                        <td
                            className="text-center "
                        >
                            {singleData?.region}
                        </td>
                        <td className="text-center status">
                            {singleData?.country}
                        </td>

                        {/* there dot  */}
                        <td className="relative">
                            {singleData?.pestle}
                        </td>

                        {/* there dot  */}
                        <td className="relative">
                            {singleData?.relevance}
                        </td>

                        <td className="relative">
                            {singleData?.likelihood}
                        </td>

                        <td className="relative">
                            {singleData?.source}
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    );
};

export default ShowTable;