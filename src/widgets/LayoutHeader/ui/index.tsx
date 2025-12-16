import styles from './styles.module.scss';
import { ThemeSwitcher } from '~/features/ThemeSwitcher';
import { Modal } from '~/shared/ui/Modal';
import { useState } from 'react';

export const LayoutHeader: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>FSD App: Список Постов</h1>
        <div className={styles.actions}>
          <Modal>
            <Modal.Trigger>
              О проекте
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>
                  О проекте
                </Modal.Title>
                <Modal.Trigger>
                  X
                </Modal.Trigger>
              </Modal.Header>
              <Modal.Body>
                <p>Это приложение для управления списком постов, созданное с использованием архитектуры Feature-Sliced Design.</p>
                <p>В приложении реализована возможность переключения темы (светлая/тёмная) и отображения модального окна с информацией о проекте.</p>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal.Content>
          </Modal>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};