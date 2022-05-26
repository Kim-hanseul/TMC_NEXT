import styles from "@/styles/Layout.module.css";
import { Modal, Pagination } from '@/components'


export function Layout({ children }){
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Pagination/>
    </div>

  );
}
