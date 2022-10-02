import React, { useEffect, useState } from "react";
import { app, database } from "../../../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { GrUpdate } from "react-icons/gr";
import {
  Button,
  Flex,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
} from "@chakra-ui/react";

const AddSlider = () => {
  const databaseRef = collection(database, "crud data");
  const [ID, setID] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [largeURL, setLargeURL] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [category, setCategory] = useState("");
  const [services, setServices] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  const getId = (
    id,
    largeURL,
    width,
    height,
    category,
    services,
    title,
    subtitle,
    content
  ) => {
    setID(id);
    setLargeURL(largeURL);
    setWidth(width);
    setHeight(height);
    setCategory(category);
    setServices(services);
    setTitle(title);
    setSubtitle(subtitle);
    setContent(content);
    setIsUpdate(true);
  };

  const updateData = () => {
    let fieldToEdit = doc(database, "crud data", ID);
    updateDoc(fieldToEdit, {
      largeURL: largeURL,
      width: width,
      height: height,
      category: category,
      services: services,
      title: title,
      subtitle: subtitle,
      content: content,
    })
      .then(() => {
        alert("data Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const addSlider = () => {
    addDoc(databaseRef, {
      largeURL: largeURL,
      width: width,
      height: height,
      category: category,
      services: services,
      title: title,
      subtitle: subtitle,
      content: content,
    })
      .then(() => {
        alert("data sent");
        setLargeURL("");
        setWidth("");
        setHeight("");
        setCategory("");
        setServices("");
        setTitle("");
        setSubtitle("");
        setContent("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Flex width={"100%"} justifyContent={"center"} flexDir={"column"}>
      <Flex width={"100%"} flexDir={"column"} margin={6}>
        <Heading mb={5}>Proje Ekle</Heading>
        <Input
          mb={2}
          placeholder={"Adres"}
          type={"text"}
          value={largeURL}
          onChange={(e) => setLargeURL(e.target.value)}
        />
        <Input
          mb={2}
          placeholder={"Genişlik"}
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <Input
          mb={2}
          placeholder={"Yükseklik"}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <Input
          mb={2}
          placeholder={"Kategori"}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          mb={2}
          placeholder={"Hizmet"}
          value={services}
          onChange={(e) => setServices(e.target.value)}
        />
        <Input
          mb={2}
          placeholder={"Başlık"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          mb={2}
          placeholder={"Alt Başlık"}
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <Input
          mb={2}
          placeholder={"İçerik"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {isUpdate ? (
          <Button onClick={updateData}>Güncelle</Button>
        ) : (
          <Button onClick={addSlider}>Ekle</Button>
        )}
      </Flex>
      <Flex>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th isNumeric>ID</Th>
                <Th>URL</Th>
                <Th>TITLE</Th>
                <Th>SUBTITLE</Th>
                <Th>CATEGORY</Th>
                <Th>CONTENT</Th>
                <Th>SERVICES</Th>
                <Th>HEIGHT</Th>
                <Th>WIDTH</Th>
                <Th>ACTIONS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td isNumeric>{item.id}</Td>
                    <Td>{item.largeURL}</Td>
                    <Td>{item.title}</Td>
                    <Td>{item.subtitle}</Td>
                    <Td>{item.category}</Td>
                    <Td>{item.content}</Td>
                    <Td>{item.services}</Td>
                    <Td>{item.height}</Td>
                    <Td>{item.width}</Td>
                    <Td>
                      <Icon
                        as={GrUpdate}
                        w={4}
                        h={4}
                        color='red.500'
                        onClick={() =>
                          getId(
                            item.id,
                            item.largeURL,
                            item.title,
                            item.subtitle,
                            item.category,
                            item.content,
                            item.services,
                            item.height,
                            item.width
                          )
                        }
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default AddSlider;
