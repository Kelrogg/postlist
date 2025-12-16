import styles from './styles.module.scss';
import { ThemeSwitcher } from '~/features/ThemeSwitcher';
import { Button } from '~/shared/ui/Button';
import { Modal } from '~/shared/ui/Modal';
import { useState } from 'react';

export const LayoutHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>FSD App: Список Постов</h1>
        <div className={styles.actions}>
          <Button variant="outline" size="medium" onClick={openModal}>
            О проекте
          </Button>
          <ThemeSwitcher />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="О проекте"
      >
        <p>Это приложение для управления списком постов, созданное с использованием архитектуры Feature-Sliced Design.</p>
        <p>В приложении реализована возможность переключения темы (светлая/тёмная) и отображения модального окна с информацией о проекте.</p>
      </Modal>
    </header>
  );
};