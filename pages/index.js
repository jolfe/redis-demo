import Head from "next/head";
import Image from "next/image";
import NFTForm from "../lib/NFTForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Create NFT Tracking</h1>
      <NFTForm />
    </div>
  );
}
