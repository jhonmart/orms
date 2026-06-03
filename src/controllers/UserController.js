import { ValidationError, UniqueConstraintError } from '@sequelize/core';
import { User } from '../models/User.js';

export class UserController {
  static async create(req, res) {
    try {
      const user = await User.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        return res.status(409).json({
          error: 'Registro duplicado',
          fields: error.errors.map((e) => ({
            field: e.path,
            message: e.message,
          })),
        });
      }

      if (error instanceof ValidationError) {
        return res.status(400).json({
          error: 'Dados inválidos',
          fields: error.errors.map((e) => ({
            field: e.path,
            message: e.message,
          })),
        });
      }

      console.error(error);

      return res.status(500).json({
        error: 'Erro interno do servidor',
      });
    }
  }

  static async list(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  static async getById(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
      });
    }

    return res.json(user);
  }

  static async update(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
      });
    }

    await user.update(req.body);

    return res.json(user);
  }

  static async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
      });
    }

    await user.destroy();

    return res.status(204).send();
  }
}
