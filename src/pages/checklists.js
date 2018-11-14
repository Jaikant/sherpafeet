import React, { Component } from "react";

import Layout from "../components/Layout";
import { Text, Flex, Heading } from "rebass";

export default () => {
  return (
    <Layout>
      <Flex justifyContent="center">
        <Text p={[2, 4, 5]} color="#333">
          <Heading
            fontSize={[2, 4, 5]}
            children="Here is a checklist to pack your backpack."
          />
          <Heading fontSize={[2, 3, 4]} children=" BAG" />
          <Text fontSize={[0, 1, 2]}>
            <ul type="disc">
              <li>A good sturdy backpack (40-60 litres)</li>
              <li>
                A small bag to carry your daily necessities is mandatory if you
                are offloading your back pack.
              </li>
            </ul>
          </Text>
          <Heading fontSize={[2, 3, 4]} children="FOOTWEAR" />
          <Text fontSize={[0, 1, 2]}>
            <ul type="disc">
              <li>
                A good pair of trekking shoes. Shoes with ankle support is
                recommended. A Good pair of shoes is important to protect your
                foot from injury.
              </li>
              <li>
                {" "}
                A pair of chappals which will be used at the camping site.
              </li>
              <li>Three pairs of socks.</li>
            </ul>
          </Text>
          <Heading fontSize={[2, 3, 4]} children="CLOTHING" />
          <Text fontSize={[0, 1, 2]}>
            <ul type="disc">
              <li>
                Three trekking pants, this includes the one you would be
                wearing.
              </li>
              <li>
                {" "}
                Three tee shirts, this includes the one you would be wearing.
              </li>
              <li> Two full sleeves woolens/fleece One warm jacket.</li>
              <li> One set of thermals - upper and lower. One rain poncho.</li>
            </ul>
          </Text>
          <Heading fontSize={[2, 3, 4]} children=" ACCESSORIES" />
          <Text fontSize={[0, 1, 2]}>
            <ul type="disc">
              <li>One balaclava, this helps to protect the neck as well.</li>
              <li> One pair of gloves, synthetic is good.</li>{" "}
              <li> One cap to protect you from sun.</li>
              <li> One sun glasses</li>
              <li> One head lamp/torch</li>
              <li> One trekking pole</li>
              <li> Two water bottles </li>
              <li> One lunch box </li>
              <li>One tumbler</li> <li>One spoon</li>
            </ul>
          </Text>
          <Heading fontSize={[2, 3, 4]} children=" TOILETRIES " />
          <Text fontSize={[0, 1, 2]}>
            <ul type="disc">
              <li> A sunscreen lotion with high SPF</li>{" "}
              <li> Toothbrush, toothpaste and soap </li>
              <li>Towel to wipe your face</li>
              <li> One chap stick for dry lips.</li>
              <li> A packet of wet tissues </li>
              <li>A roll of toilet paper.</li>
              <li>
                {" "}
                A few plastic covers to pack or carry your dry waste back.
              </li>
            </ul>
          </Text>
          <Heading fontSize={[2, 3, 4]} children="SNACKS" />
          <Text fontSize={[0, 1, 2]}>
            <ul type="disc">
              <li>Chocolate</li>
              <li> Dry fruits and nuts</li>
              <li> ORS / Glucon D</li>
            </ul>
          </Text>
        </Text>
      </Flex>
    </Layout>
  );
};
